import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthFacade } from '@infineo-disk-shop/auth';

@Component({
  selector: 'infineo-disk-shop-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public isLogged = false;
  public title = 'Infineo Disk Shop';

  private destroy$: Subject<void> = new Subject<void>();
  private logged$ = this.authFacade.logged$;

  constructor(private authFacade: AuthFacade) {}

  public ngOnInit(): void {
    this.logged$.pipe(takeUntil(this.destroy$)).subscribe((logged: boolean) => this.isLogged = logged);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public logout(): void {
    this.authFacade.logout()
  }
}
