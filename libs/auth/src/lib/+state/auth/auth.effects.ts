import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';

import { fetch } from '@nrwl/angular';

import { CredentialsEntity } from '@infineo-disk-shop/auth';
import * as AuthActions from './auth.actions';

const users: CredentialsEntity[] = [{email: 'test@infineo.com', password: 'infi-neo'}];

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          if (users.findIndex((index) => index.toString() === action.credentials.toString()) !== -1) {
            return AuthActions.loginSucceed();
          }
        },

        onError: (action, error) => {
          console.error('Error', error);
          return AuthActions.loginFailure();
        },
      })
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          users.push(action.credentials);
          return AuthActions.loginSucceed();
        },

        onError: (action, error) => {
          console.error('Error', error);
          return AuthActions.loginFailure();
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
