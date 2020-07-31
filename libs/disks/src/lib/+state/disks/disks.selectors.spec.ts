import { DisksEntity } from './disks.models';
import { disksAdapter, initialState } from './disks.reducer';
import * as DisksSelectors from './disks.selectors';

describe('Disks Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const createDisksEntity = (title: string, price: number, picture: string, artist: string, id: number) =>
    ({
      id,
      title,
      price,
      picture,
      artist
    } as DisksEntity);

  let state;

  beforeEach(() => {
    state = {
      disks: disksAdapter.setAll(
        [
          createDisksEntity('test', 10, 'test', 'test', 1),
          createDisksEntity('test', 20, 'test', 'test', 2)
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Disks Selectors', () => {
    it('getAllDisks() should return the list of Disks', () => {
      const results = DisksSelectors.getAllDisks(state);

      expect(results.length).toBe(2);
    });

    it("getDisksLoaded() should return the current 'loaded' status", () => {
      const result = DisksSelectors.getDisksLoaded(state);

      expect(result).toBe(true);
    });

    it("getDisksError() should return the current 'error' state", () => {
      const result = DisksSelectors.getDisksError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
