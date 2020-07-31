import { CredentialsEntity } from './auth.models';
import * as AuthActions from './auth.actions';
import { State, initialState, reducer } from './auth.reducer';

describe('Auth Reducer', () => {
  const createAuthEntity = (email: string, password: string) =>
    ({
      email,
      password
    } as CredentialsEntity);

  beforeEach(() => {});

  describe('valid Auth actions', () => {
    it('register should return logged true', () => {
      const auth = createAuthEntity('test@infineo.com', 'infi-neo');
      const action = AuthActions.register({ credentials: auth });

      const result: State = reducer(initialState, action);

      expect(result.logged).toBe(true);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
