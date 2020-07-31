import { Component } from '@angular/core';

import { CartFacade } from '@infineo-disk-shop/cart';

@Component({
  selector: 'infineo-disk-shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public products$ = this.cartFacade.products$;
  public totalAmount$ = this.cartFacade.totalAmount$;

  constructor(private cartFacade: CartFacade) { }
}
