import { DisksEntity } from '@infineo-disk-shop/disks';
import { createAction, props } from '@ngrx/store';

export const loadCart = createAction('[Cart] Load Cart');

export const addProduct = createAction(
  '[Cart] Add Product',
  props<{ product: DisksEntity }>()
);

export const getTotalAmount = createAction('[Cart] Get amount');

export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ products: DisksEntity[] }>()
);

export const loadCartFailure = createAction(
  '[Cart] Load Cart Failure',
  props<{ error: any }>()
);
