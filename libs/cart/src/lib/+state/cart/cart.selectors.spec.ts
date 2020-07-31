import { cartAdapter, initialState } from './cart.reducer';
import * as CartSelectors from './cart.selectors';

const product = {
  title: 'test',
  price: 10,
  picture: 'test',
  artist: 'test',
  id: 1
};

describe('Cart Selectors', () => {

  let state;

  beforeEach(() => {

    state = {
      cart: cartAdapter.setAll(
        [product],
        {
          ...initialState,
          loaded: false,
          products: [],
          totalAmount: 0
        }
      ),
    };
  });

  describe('Cart Selectors', () => {
    it('getAmount() should return the amount of cart', () => {
      const result = CartSelectors.getAmount(state);

      expect(result).toBe(0);
    });

    it('getCartProducts() should return cart products', () => {
      const result = CartSelectors.getCartProducts(state);

      expect(result).toBeInstanceOf(Array);
    });
  });
});
