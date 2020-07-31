import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DisksEntity } from '@infineo-disk-shop/disks';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { CartEntity } from './cart.models';
import { CartFacade } from './cart.facade';

import * as CartActions from './cart.actions';
import { CART_FEATURE_KEY, State, reducer } from './cart.reducer';

interface TestSchema {
  cart: State;
}

describe('CartFacade', () => {
  let facade: CartFacade;
  let store: Store<TestSchema>;
  const createCartEntity = (products: DisksEntity[]) =>
    ({
      products
    } as CartEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CART_FEATURE_KEY, reducer),
        ],
        providers: [CartFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(CartFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('products$ should return empty list', async (done) => {
      try {
        let list = await readFirst(facade.products$);

        expect(list.length).toBe(0);

        facade.dispatch(CartActions.loadCart());

        list = await readFirst(facade.products$);

        expect(list.length).toBe(0);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadCartSuccess` to manually update list
     */
    it('products$ should return the products list', async (done) => {
      try {
        let list = await readFirst(facade.products$);

        expect(list.length).toBe(0);

        facade.dispatch(
          CartActions.addProduct({
            product: {
              title: 'test',
              price: 10,
              picture: 'test',
              artist: 'test',
              id: 1
            },
          })
        );

        list = await readFirst(facade.products$);

        expect(list.length).toBe(1);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
