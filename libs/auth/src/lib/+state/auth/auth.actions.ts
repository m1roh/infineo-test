import { createAction, props } from '@ngrx/store';

import { CredentialsEntity } from './auth.models';

export const login = createAction(
  '[Auth] Login',
  props<{ credentials: CredentialsEntity }>()
);

export const loginFailure = createAction('[Auth] Login Failed');

export const loginSucceed = createAction('[Auth] Login Succeed');

export const logout = createAction('[Auth] Logout');

export const register = createAction(
  '[Auth] Register',
  props<{ credentials: CredentialsEntity }>()
);
