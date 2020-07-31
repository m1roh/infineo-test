import * as CartActions from './cart.actions';
import { State, initialState, reducer } from './cart.reducer';

describe('Cart Reducer', () => {
  beforeEach(() => {});

  describe('valid Cart actions', () => {
    it('add product should add a product in cart', () => {
      const product = {
        title: 'test',
        price: 10,
        picture: 'test',
        artist: 'test',
        id: 1
      };
      const action = CartActions.addProduct({
        product: product,
      });

      const result: State = reducer(initialState, action);

      expect(result.products.toString()).toBe(product.toString());
      expect(result.totalAmount).toBe(product.price);
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
