import { createAction, props } from '@ngrx/store';
import ToDo from './users.model';

export const GetToDoAction = createAction('[ToDo] - Get ToDo');

export const CleanByUser = createAction('[ToDo] - Clean ToDo');

export const DeleteUser = createAction('[ToDo] - Delete ToDo',
props<{ payload: any }>());

export const CreateToDoAction = createAction(
  '[ToDo] - Create ToDo',
  props<{ payload: any }>()
);

export const GetInfoUser = createAction(
  '[ToDo] - Get Info ToDo',
  props<{ payload: any }>()
);

export const BeginGetToDoAction = createAction('[ToDo] - Begin Get ToDo');

export const SuccessGetToDoAction = createAction(
  '[ToDo] - Sucess Get ToDo',
  props<{ payload: ToDo[] }>()
);

export const BeginCreateToDoAction = createAction(
  '[ToDo] - Begin Create ToDo',
  props<{ payload: ToDo }>()
);

export const SuccessCreateToDoAction = createAction(
  '[ToDo] - Sucess Create ToDo',
  props<{ payload: ToDo }>()
);

export const SuccessInfoByUser = createAction(
  '[ToDo] - Sucess By User',
  props<{ payload: ToDo }>()
);

export const updateUser = createAction(
  '[ToDo] - Update By User',
  props<any>()
);

export const ErrorToDoAction = createAction('[ToDo] - Error', props<Error>());
