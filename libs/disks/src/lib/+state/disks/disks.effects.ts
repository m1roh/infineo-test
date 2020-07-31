import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { fetch } from '@nrwl/angular';

import * as DisksActions from './disks.actions';

@Injectable()
export class DisksEffects {
  loadDisks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DisksActions.loadDisks),
      fetch({
        run: (action) => {
          return DisksActions.loadDisksSuccess({
            disks: [
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
            ]
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return DisksActions.loadDisksFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions) {}
}
