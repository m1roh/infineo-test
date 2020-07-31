import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { AuthFacade } from '@infineo-disk-shop/auth';
import { DiskComponent } from './disk/disk.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, RouterModule],
  declarations: [NavbarComponent, DiskComponent],
  exports: [NavbarComponent, DiskComponent],
  providers: [AuthFacade]
})
export class UiModule {}
