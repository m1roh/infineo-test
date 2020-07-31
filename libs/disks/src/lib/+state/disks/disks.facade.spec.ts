import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { DisksEntity } from './disks.models';
import { DisksEffects } from './disks.effects';
import { DisksFacade } from './disks.facade';

import * as DisksActions from './disks.actions';
import {
  DISKS_FEATURE_KEY,
  State,
  reducer,
} from './disks.reducer';

interface TestSchema {
  disks: State;
}

describe('DisksFacade', () => {
  let facade: DisksFacade;
  let store: Store<TestSchema>;
  const createDisksEntity = (title: string, price: number, picture: string, artist: string, id: number) =>
    ({
      id,
      title,
      price,
      picture,
      artist
    } as DisksEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(DISKS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([DisksEffects]),
        ],
        providers: [DisksFacade],
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
      facade = TestBed.get(DisksFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return the disk list', async (done) => {
      try {
        let list = await readFirst(facade.allDisks$);

        expect(list.length).toBe(0);

        facade.dispatch(DisksActions.loadDisks());

        list = await readFirst(facade.allDisks$);

        expect(list.length).toBe(2);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadDisksSuccess` to manually update list
     */
    it('allDisks$ should return the loaded list', async (done) => {
      try {
        let list = await readFirst(facade.allDisks$);

        expect(list.length).toBe(0);

        facade.dispatch(
          DisksActions.loadDisksSuccess({
            disks: [
              createDisksEntity('test', 10, 'test', 'test', 1),
              createDisksEntity('test', 20, 'test', 'test', 2)
            ],
          })
        );

        list = await readFirst(facade.allDisks$);

        expect(list.length).toBe(2);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
