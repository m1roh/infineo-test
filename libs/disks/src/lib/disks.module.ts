import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CartFacade } from '@infineo-disk-shop/cart';
import { UiModule } from '@infineo-disk-shop/ui';
import { DisksEffects } from './+state/disks/disks.effects';
import { DisksFacade } from './+state/disks/disks.facade';
import * as fromDisks from './+state/disks/disks.reducer';
import { DisksComponent } from './disks/disks.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DisksComponent }
    ]),

    StoreModule.forFeature(fromDisks.DISKS_FEATURE_KEY, fromDisks.reducer),

    EffectsModule.forFeature([DisksEffects]),
    UiModule,
    MatGridListModule
  ],
  providers: [CartFacade, DisksFacade],
  declarations: [DisksComponent],
  exports: [DisksComponent],
})
export class DisksModule {}
