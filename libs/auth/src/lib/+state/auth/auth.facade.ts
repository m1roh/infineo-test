import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import { login, logout, register } from './auth.actions';
import { CredentialsEntity } from './auth.models';

import * as fromAuth from './auth.reducer';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  logged$ = this.store.pipe(select(AuthSelectors.getAuthLogged));

  constructor(private store: Store<fromAuth.AuthPartialState>) {}

  public dispatch(action: Action) {
    this.store.dispatch(action);
  }

  public login(credentials: CredentialsEntity): void {
    this.store.dispatch(login({ credentials }))
  }

  public register(credentials: CredentialsEntity): void {
    this.store.dispatch(register({ credentials }))
  }

  public logout(): void {
    this.store.dispatch(logout())
  }
}
