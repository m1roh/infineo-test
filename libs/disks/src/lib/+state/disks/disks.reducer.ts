import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as DisksActions from './disks.actions';
import { DisksEntity } from './disks.models';

export const DISKS_FEATURE_KEY = 'disks';

export interface State extends EntityState<DisksEntity> {
  selectedId?: string | number; // which Disks record has been selected
  loaded: boolean; // has the Disks list been loaded
  error?: string | null; // last known error (if any)
}

export interface DisksPartialState {
  readonly [DISKS_FEATURE_KEY]: State;
}

export const disksAdapter: EntityAdapter<DisksEntity> = createEntityAdapter<
  DisksEntity
>();

export const initialState: State = disksAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const disksReducer = createReducer(
  initialState,
  on(DisksActions.loadDisks, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DisksActions.loadDisksSuccess, (state, { disks }) =>
    disksAdapter.setAll(disks, { ...state, loaded: true })
  ),
  on(DisksActions.loadDisksFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return disksReducer(state, action);
}
