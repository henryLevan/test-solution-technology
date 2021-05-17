import {Component, OnInit} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as ToDoActions from '../../store/users.action';
import ToDo from '../../store/users.model';
import ToDoState from '../../store/users.state';
import { ViewEncapsulation } from '@angular/core';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableBasicExample implements OnInit{
  displayedColumns: string[] = ['name', 'age', 'date', 'action'];
  dataSource: any;
  dataFilter:any;
  Title: string = '';
  IsCompleted: boolean = false;
  todoError  = null;
  constructor(private store: Store<{ todos: ToDoState }>){
  }

  ngOnInit() {
   this.store.subscribe(data=>{
     this.dataSource = data.todos.Users;
     this.dataFilter = this.dataSource;
   })
   this.store.dispatch(ToDoActions.GetToDoAction());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const patt = new RegExp(filterValue,'i');
    this.dataFilter = this.dataSource.filter((e: any) => {
      if(patt.test(e.nameUser)){
        return e.nameUser
      }
    })
  }
  deleteUser(id:any){
    this.store.dispatch(ToDoActions.DeleteUser({ payload: id }));
  }
}