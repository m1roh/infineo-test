import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CART_FEATURE_KEY,
  State,
  CartPartialState,
} from './cart.reducer';

// Lookup the 'Cart' feature state managed by NgRx
export const getCartState = createFeatureSelector<CartPartialState, State>(
  CART_FEATURE_KEY
);

export const getAmount = createSelector(
  getCartState,
  (state: State) => state.totalAmount
)

export const getCartProducts = createSelector(
  getCartState,
  (state: State) => state.products
);
