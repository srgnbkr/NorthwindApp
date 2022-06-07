import { UserDetail } from './../../models/usersModels/userDetail';
import { createAction, props } from '@ngrx/store';

export const setUserDetail = createAction(
  'Set User Detail',
  props<{ userDetail: UserDetail }>()
);

export const deleteUserDetail = createAction('Delete User Detail');
