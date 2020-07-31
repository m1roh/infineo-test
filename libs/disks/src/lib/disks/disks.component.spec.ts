import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterTestingModule } from '@angular/router/testing';
import { CartFacade } from '@infineo-disk-shop/cart';
import { DisksFacade } from '@infineo-disk-shop/disks';
import { UiModule } from '@infineo-disk-shop/ui';
import { StoreModule } from '@ngrx/store';

import * as fromDisks from '../+state/disks/disks.reducer';
import { DisksComponent } from './disks.component';

describe('DisksComponent', () => {
  let component: DisksComponent;
  let fixture: ComponentFixture<DisksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisksComponent ],
      imports: [
        RouterTestingModule,

        StoreModule.forRoot({}),
        StoreModule.forFeature(fromDisks.DISKS_FEATURE_KEY, fromDisks.reducer),

        MatGridListModule,
        UiModule,
      ],
      providers: [CartFacade, DisksFacade]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
