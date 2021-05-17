import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ToDoActions from './users.action';
import { ToDoHttpService } from './users.httpservice';
import ToDo from './users.model';
import { Router } from '@angular/router'

@Injectable()
export class ToDoEffects {
  constructor(private todoService: ToDoHttpService, private action$: Actions, private router: Router) {}

  GetToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.CreateToDoAction),
      mergeMap(action =>
        
        this.todoService.createNewUser(action.payload).pipe(
          map((data: ToDo[]) => {
            this.router.navigate(['/'])
            return ToDoActions.SuccessGetToDoAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.ErrorToDoAction(error));
          })
        )
      )
    )
  );

  CreateToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.GetToDoAction),
      mergeMap(action =>
        this.todoService.getAllUsers().pipe(
          map((data: any) => {

            return ToDoActions.SuccessGetToDoAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.ErrorToDoAction(error));
          })
        )
      )
    )
  );

  DeleteUser$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.DeleteUser),
      mergeMap(action =>
        this.todoService.deleteUser(action.payload).pipe(
          map((data: any) => {
            return ToDoActions.GetToDoAction();
          }),
          catchError((error: Error) => {
            return of(ToDoActions.ErrorToDoAction(error));
          })
        )
      )
    )
  );

  GetByUser$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.GetInfoUser),
      mergeMap(action =>
        this.todoService.getUser(action.payload).pipe(
          map((data: any) => {
            return ToDoActions.SuccessInfoByUser({ payload: data });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.ErrorToDoAction(error));
          })
        )
      )
    )
  );

  UpdateByUser$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.updateUser),
      mergeMap(action =>
        this.todoService.updateUser({payload : action.id, body: action.payload}).pipe(
          map((data: any) => {
            this.router.navigate(['/'])
            return ToDoActions.GetToDoAction();
          }),
          catchError((error: Error) => {
            return of(ToDoActions.ErrorToDoAction(error));
          })
        )
      )
    )
  );

}
