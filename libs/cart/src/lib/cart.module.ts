import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { CartFacade } from './+state/cart/cart.facade';
import * as fromCart from './+state/cart/cart.reducer';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CartComponent }
    ]),

    StoreModule.forFeature(fromCart.CART_FEATURE_KEY, fromCart.reducer),
    MatCardModule
  ],
  providers: [CartFacade],
  declarations: [CartComponent],
  exports: [CartComponent],
})

export class CartModule {}
