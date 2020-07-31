import { TestBed, async } from '@angular/core/testing';
import { UiModule } from '@infineo-disk-shop/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import * as fromAuth from '@infineo-disk-shop/auth'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, UiModule, StoreModule.forRoot(
        {
          auth: fromAuth.reducer
        },
        {
          metaReducers: !environment.production ? [] : [],
          runtimeChecks: {
            strictActionImmutability: true,
            strictStateImmutability: true
          }
        }
      ),
        EffectsModule.forRoot([]),],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'disk-shop'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('disk-shop');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('infineo-disk-shop-navbar').textContent).toContain(
      'Infineo Disk Shop'
    );
  });
});
