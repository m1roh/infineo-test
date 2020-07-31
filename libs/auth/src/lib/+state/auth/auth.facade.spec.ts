import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { CredentialsEntity } from './auth.models';
import { AuthEffects } from './auth.effects';
import { AuthFacade } from './auth.facade';

import * as AuthActions from './auth.actions';
import { AUTH_FEATURE_KEY, State, reducer } from './auth.reducer';

interface TestSchema {
  auth: State;
}

describe('AuthFacade', () => {
  let facade: AuthFacade;
  let store: Store<TestSchema>;
  const createAuthEntity = () =>
    ({
      email: 'test@infineo.com',
      password: 'infi-neo',
    } as CredentialsEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(AUTH_FEATURE_KEY, reducer),
          EffectsModule.forFeature([AuthEffects]),
        ],
        providers: [AuthFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(AuthFacade);
    });

    it('logged$ should be true after dispatching login', async (done) => {
      try {
        let isLogged = await readFirst(facade.logged$);

        expect(isLogged).toBe(false);

        facade.dispatch(AuthActions.login({ credentials: createAuthEntity() }));

        isLogged = await readFirst(facade.logged$);

        expect(isLogged).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('logged$ should be true after dispatching register', async (done) => {
      try {
        let isLogged = await readFirst(facade.logged$);

        expect(isLogged).toBe(false);

        facade.dispatch(AuthActions.register({ credentials: createAuthEntity() }));

        isLogged = await readFirst(facade.logged$);

        expect(isLogged).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('logged$ should be false after dispatching logout', async (done) => {
      try {
        let isLogged = await readFirst(facade.logged$);

        expect(isLogged).toBe(false);

        facade.dispatch(AuthActions.login({ credentials: createAuthEntity() }));

        isLogged = await readFirst(facade.logged$);

        expect(isLogged).toBe(true);

        facade.dispatch(AuthActions.logout());

        isLogged = await readFirst(facade.logged$);

        expect(isLogged).toBe(false);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
