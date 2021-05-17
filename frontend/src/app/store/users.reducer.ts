import { Action, createReducer, on } from '@ngrx/store';
import * as ToDoActions from './users.action';
import ToDo from './users.model';
import ToDoState, { initializeState } from './users.state';

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(ToDoActions.CreateToDoAction, (state: any, { payload }) => {
    console.log(payload,'payyy')
    return { ...state, Users: payload, ToDoError: null };
  }),

  on(ToDoActions.SuccessGetToDoAction, (state: ToDoState, { payload }) => {
    return { ...state, Users: payload, ToDoError: null };
  }),

  on(ToDoActions.SuccessInfoByUser, (state: any, { payload }) => {
    return { ...state, UsersInfo: payload, ToDoError: null };
  }),
  on(ToDoActions.CleanByUser, (state: any) => {
    return initialState;
  })

);

export function ToDoReducer(
  state: ToDoState | undefined,
  action: Action
): ToDoState {
  return reducer(state, action);
}
