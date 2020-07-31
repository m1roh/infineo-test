import { Injectable } from '@angular/core';
import { DisksEntity } from '@infineo-disk-shop/disks';

import { select, Store, Action } from '@ngrx/store';
import { addProduct } from './cart.actions';

import * as fromCart from './cart.reducer';
import * as CartSelectors from './cart.selectors';

@Injectable()
export class CartFacade {
  products$ = this.store.pipe(select(CartSelectors.getCartProducts));
  totalAmount$ = this.store.pipe(select(CartSelectors.getAmount));

  constructor(private store: Store<fromCart.CartPartialState>) {}

  public dispatch(action: Action) {
    this.store.dispatch(action);
  }

  public add(product: DisksEntity) {
    this.store.dispatch(addProduct({ product }))
  }
}
