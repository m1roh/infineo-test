import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { UiModule } from '@infineo-disk-shop/ui';
import { AuthGuard } from '@infineo-disk-shop/auth';
import * as fromAuth from '@infineo-disk-shop/auth'
import * as fromCart from '@infineo-disk-shop/cart'
import { AppComponent } from './app.component';
import { RoutingKeys } from './routingKeys';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: RoutingKeys.HOME,
          pathMatch: 'full'
        },
        {
          path: RoutingKeys.HOME,
          loadChildren: () =>
            import('@infineo-disk-shop/disks').then(
              (module) => module.DisksModule
            )
        },
        {
          path: RoutingKeys.AUTH,
          loadChildren: () =>
            import('@infineo-disk-shop/auth').then(
              (module) => module.AuthModule
            )
        },
        {
          path: RoutingKeys.CART,
          loadChildren: () =>
            import('@infineo-disk-shop/cart').then(
              (module) => module.CartModule
            ),
          canActivate: [AuthGuard]
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    StoreModule.forRoot(
      {
        auth: fromAuth.reducer,
        cart: fromCart.reducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
