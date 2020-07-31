import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  AUTH_FEATURE_KEY,
  State,
  AuthPartialState,
  authAdapter,
} from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const getAuthState = createFeatureSelector<AuthPartialState, State>(
  AUTH_FEATURE_KEY
);

export const getAuthLogged = createSelector(
  getAuthState,
  (state: State) => state ? state.logged : null
);

export const getAuthError = createSelector(
  getAuthState,
  (state: State) => state.error
);
