import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AuthEffects } from './+state/auth/auth.effects';
import { AuthFacade } from './+state/auth/auth.facade';
import * as fromAuth from './+state/auth/auth.reducer';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AuthComponent }
    ]),

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
  ],
  providers: [AuthFacade],
  declarations: [AuthComponent],
  exports: [AuthComponent],
})
export class AuthModule {}
