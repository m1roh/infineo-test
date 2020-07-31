import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { CredentialsEntity } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface State extends EntityState<CredentialsEntity> {
  logged: boolean; // has the Auth list been loaded
  error?: string | null; // last known error (if any)
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const authAdapter: EntityAdapter<CredentialsEntity> = createEntityAdapter<
  CredentialsEntity
>();

export const initialState: State = authAdapter.getInitialState({
  // set initial required properties
  logged: false,
});

const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    logged: false,
    error: null,
  })),
  on(AuthActions.loginFailure, (state) => ({
    ...state,
    logged: false,
    error: null,
  })),
  on(AuthActions.loginSucceed, (state) => ({
    ...state,
    logged: true,
    error: null,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    logged: false,
    error: null,
  })),
  on(AuthActions.register, (state) => ({
    ...state,
    logged: true,
    error: null,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
