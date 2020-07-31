import { Component, Input } from '@angular/core';

import { CartFacade } from '@infineo-disk-shop/cart';
import { DisksEntity } from '@infineo-disk-shop/disks';

@Component({
  selector: 'infineo-disk-shop-disk',
  templateUrl: './disk.component.html',
  styleUrls: ['./disk.component.scss']
})
export class DiskComponent {
  @Input() public disk: DisksEntity;

  constructor(private cartFacade: CartFacade) {
  }

  public addToCart(disk: DisksEntity) {
    this.cartFacade.add(disk)
  }
}
