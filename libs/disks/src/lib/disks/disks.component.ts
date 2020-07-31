import { Component, OnInit } from '@angular/core';

import { DisksFacade } from '@infineo-disk-shop/disks';

@Component({
  selector: 'infineo-disk-shop-disks',
  templateUrl: './disks.component.html',
  styleUrls: ['./disks.component.scss']
})
export class DisksComponent implements OnInit {
  disks$ = this.disksFacade.allDisks$;

  constructor(public disksFacade: DisksFacade) { }

  ngOnInit(): void {
    this.disksFacade.loadAll()
  }
}
