import { DisksEntity } from './disks.models';
import * as DisksActions from './disks.actions';
import { State, initialState, reducer } from './disks.reducer';

describe('Disks Reducer', () => {
  const createDisksEntity = (title: string, price: number, picture: string, artist: string, id: number) =>
    ({
      id,
      title,
      price,
      picture,
      artist
    } as DisksEntity);

  beforeEach(() => {});

  describe('valid Disks actions', () => {
    it('loadDisksSuccess should return set the list of known Disks', () => {
      const disks = [
        createDisksEntity('test', 10, 'test', 'test', 1),
        createDisksEntity('test', 20, 'test', 'test', 2)
      ];
      const action = DisksActions.loadDisksSuccess({ disks });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
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
