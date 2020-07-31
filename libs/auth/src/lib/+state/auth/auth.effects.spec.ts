import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { AuthEffects } from './auth.effects';
import * as AuthActions from './auth.actions';

describe('AuthEffects', () => {
  let actions: Observable<any>;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AuthEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(AuthEffects);
  });

  describe('login$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthActions.login({ credentials: { email: 'test@infineo.com', password: 'infi-neo' } }) });

      const expected = hot('-a-|', {
        a: AuthActions.loginSucceed(),
      });

      expect(effects.login$).toBeObservable(expected);
    });
  });

  describe('register$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthActions.register({ credentials: { email: 'test@test.com', password: 'test-test' } }) });

      const expected = hot('-a-|', {
        a: AuthActions.loginSucceed(),
      });

      expect(effects.register$).toBeObservable(expected);
    });
  });
});
