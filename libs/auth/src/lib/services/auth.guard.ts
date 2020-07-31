import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthFacade } from '@infineo-disk-shop/auth';
import { map, take } from 'rxjs/operators';
import { RoutingKeys } from '../../../../../apps/disk-shop/src/app/routingKeys';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private logged$ = this.authFacade.logged$;

  constructor(
    private authFacade: AuthFacade,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.logged$.pipe(
      take(1),
      map((logged: boolean) => {
        if (logged) {
          return logged;
        }

        return this.router.createUrlTree([RoutingKeys.AUTH])
      })
    );
  }

}
