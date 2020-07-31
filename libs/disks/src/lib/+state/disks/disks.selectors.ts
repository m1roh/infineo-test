import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  DISKS_FEATURE_KEY,
  State,
  DisksPartialState,
  disksAdapter,
} from './disks.reducer';

// Lookup the 'Disks' feature state managed by NgRx
export const getDisksState = createFeatureSelector<DisksPartialState, State>(
  DISKS_FEATURE_KEY
);

const { selectAll, selectEntities } = disksAdapter.getSelectors();

export const getDisksLoaded = createSelector(
  getDisksState,
  (state: State) => state.loaded
);

export const getDisksError = createSelector(
  getDisksState,
  (state: State) => state.error
);

export const getAllDisks = createSelector(getDisksState, (state: State) =>
  selectAll(state)
);

export const getDisksEntities = createSelector(getDisksState, (state: State) =>
  selectEntities(state)
);
