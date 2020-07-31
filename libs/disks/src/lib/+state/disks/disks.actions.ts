import { createAction, props } from '@ngrx/store';

import { DisksEntity } from './disks.models';

export const loadDisks = createAction('[Disks] Load Disks');

export const loadDisksSuccess = createAction(
  '[Disks] Load Disks Success',
  props<{ disks: DisksEntity[] }>()
);

export const loadDisksFailure = createAction(
  '[Disks] Load Disks Failure',
  props<{ error: any }>()
);
