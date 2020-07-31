import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CartFacade } from '@infineo-disk-shop/cart';
import { StoreModule } from '@ngrx/store';
import { CartComponent } from './cart.component';
import * as fromCart from '../+state/cart/cart.reducer';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterTestingModule,

        MatCardModule,

        StoreModule.forRoot({}),
        StoreModule.forFeature(fromCart.CART_FEATURE_KEY, fromCart.reducer)
      ],
      providers: [CartFacade]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
