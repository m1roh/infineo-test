import { CredentialsEntity } from './auth.models';
import { authAdapter, initialState } from './auth.reducer';
import * as AuthSelectors from './auth.selectors';

describe('Auth Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const createAuthEntity = (email: string, password: string) =>
    ({
      email,
      password
    } as CredentialsEntity);

  let state;

  beforeEach(() => {
    state = {
      auth: authAdapter.setAll(
        [
          createAuthEntity('test@infineo.com', 'infi-neo')
        ],
        {
          ...initialState,
          error: ERROR_MSG,
          loaded: false,
        }
      ),
    };
  });

  describe('Auth Selectors', () => {
    it("getAUthLogged() should return the current 'loaded' status", () => {
      const result = AuthSelectors.getAuthLogged(state);

      expect(result).toBe(false);
    });

    it("getAuthError() should return the current 'error' state", () => {
      const result = AuthSelectors.getAuthError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
