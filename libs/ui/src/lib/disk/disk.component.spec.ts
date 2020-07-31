import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { StoreModule } from '@ngrx/store';

import { CartFacade } from '@infineo-disk-shop/cart';
import { DiskComponent } from './disk.component';

describe('DiskComponent', () => {
  let component: DiskComponent;
  let fixture: ComponentFixture<DiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiskComponent ],
      imports: [
        MatCardModule,
        MatIconModule,

        StoreModule.forRoot({})
      ],
      providers: [CartFacade]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskComponent);
    component = fixture.componentInstance;
    component.disk = {
      title: 'test',
      price: 10,
      picture: 'test',
      artist: 'test',
      id: 1
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
