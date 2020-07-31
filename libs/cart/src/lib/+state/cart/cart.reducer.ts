import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { DisksEntity } from '@infineo-disk-shop/disks';
import * as CartActions from './cart.actions';

export const CART_FEATURE_KEY = 'cart';

export interface State extends EntityState<DisksEntity> {
  selectedId?: string | number; // which Cart record has been selected
  loaded: boolean; // has the Cart list been loaded
  error?: string | null; // last known error (if any)
  products: DisksEntity[],
  totalAmount: number;
}

export interface CartPartialState {
  readonly [CART_FEATURE_KEY]: State;
}

export const cartAdapter: EntityAdapter<DisksEntity> = createEntityAdapter<
  DisksEntity
>();

export const initialState: State = cartAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  products: [],
  totalAmount: 0
});

const cartReducer = createReducer(
  initialState,
  on(CartActions.addProduct, (state, { product}) => ({
    ...state,
    products: [...state.products, product],
    totalAmount: state.totalAmount + product.price
  })),
  on(CartActions.getTotalAmount, (state) => ({
    ...state,
    loaded: false,
    error: null
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return cartReducer(state, action);
}
