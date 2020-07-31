import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { DisksEffects } from './disks.effects';
import * as DisksActions from './disks.actions';

describe('DisksEffects', () => {
  let actions: Observable<any>;
  let effects: DisksEffects;
  const disks = [
    {
      id: 1,
      artist: 'Biga Ranx',
      picture: 'https://s.rfi.fr/media/display/6d1cf472-afbe-11ea-87a5-005056a98db9/w:1280/p:1x1/biga-ranx_0.jpg',
      price: 21.99,
      title: 'Sunset Cassette'
    },
    {
      id: 2,
      artist: 'Groundation',
      picture: 'https://culturedub.com/assets/a-miracle-525x525.jpg',
      price: 26.90,
      title: 'A Miracle'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        DisksEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(DisksEffects);
  });

  describe('loadDisks$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: DisksActions.loadDisks() });

      const expected = hot('-a-|', {
        a: DisksActions.loadDisksSuccess({ disks }),
      });

      expect(effects.loadDisks$).toBeObservable(expected);
    });
  });
});
