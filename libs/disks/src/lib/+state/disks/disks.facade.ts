import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import { loadDisks } from './disks.actions';
import * as fromDisks from './disks.reducer';
import * as DisksSelectors from './disks.selectors';

@Injectable()
export class DisksFacade {
  allDisks$ = this.store.pipe(select(DisksSelectors.getAllDisks));

  constructor(private store: Store<fromDisks.DisksPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAll() {
    this.store.dispatch(loadDisks());
  }
}
