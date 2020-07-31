import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthFacade } from '@infineo-disk-shop/auth';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from '../+state/auth/auth.reducer';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        StoreModule.forRoot({}),
        StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
      ],
      providers: [AuthFacade]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
