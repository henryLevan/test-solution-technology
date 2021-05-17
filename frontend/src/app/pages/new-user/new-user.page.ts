import {Component, OnInit, OnDestroy} from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as ToDoActions from '../../store/users.action';
import ToDoState from '../../store/users.state';
import { Router, ActivatedRoute  } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NewUserPageService } from './new-user.page.service'
/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'new-user',
  templateUrl: 'new-user.page.html',
  styleUrls: ['./new-user.page.sass'],
})
export class NewUserPage implements OnInit, OnDestroy{
  newUser : FormGroup = new FormGroup({});
  countrysList: any = ''

  positionTypeA = ['Fundador y CEO', 'Recursos humanos'];
  positionTypeB = ['Programador', 'Diseñador'];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: NewUserPageService,private store: Store<{ todos: ToDoState }>){}

  ngOnInit() {
    this.newUser = new FormGroup({
      name: new FormControl('', Validators.pattern('^[a-z0-9_-]{8,15}$')),
      birthday: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      nameUser: new FormControl('', Validators.required),
      dateJobs: new FormControl('', Validators.required),
      state: new FormControl(false, Validators.required),
      area: new FormControl('Administrativa', Validators.required),
      position: new FormControl('', Validators.required),
      commission: new FormControl('', Validators.required)
    });
    this.userService.getAllCountrys().subscribe(data=>{
      this.countrysList = data;
    })

    this.activatedRoute.params.subscribe(data => {
      if(data.id){
          this.setFormById(data.id);
          this.newUser.disable();
      }else if(data.idUpdate){
          this.setFormById(data.idUpdate);
      }
    });
    }

    ngOnDestroy():void{
      this.store.dispatch(ToDoActions.CleanByUser());
    }

    setFormById(dataId:any){
      this.store.dispatch(ToDoActions.GetInfoUser({ payload: dataId }));
          this.store.subscribe((data:any) =>{
            if(data.todos.UsersInfo){
              const dataForm = data.todos.UsersInfo;
              const dateJobss = moment(data.todos.UsersInfo.dateJobs, 'DD/MM/YYYY').format();
              const birthdays = moment(data.todos.UsersInfo.birthday, 'DD/MM/YYYY').format();
              const {
                name,
                country,
                nameUser,
                state,
                area,
                position,
                commission
              } = dataForm;
              const pathValueForm =  {
                name,
                birthday : birthdays,
                country,
                nameUser,
                dateJobs : dateJobss,
                state,
                area,
                position,
                commission
              }
              this.newUser.patchValue(pathValueForm);
            }
          })
    }

  onSubmitForm(){
    this.activatedRoute.params.subscribe((data:any) => {
      if(Object.keys(data).length === 0){
          this.onSubmit('create');
      }else if(data.idUpdate){
          this.onSubmit('update', data.idUpdate);
      }
    });
  }
  onSubmit(typeSubmit:any,id?:string){
    if(typeSubmit === 'create'){
      const requestUser = this.valueForm();
      this.store.dispatch(ToDoActions.CreateToDoAction({ payload: requestUser }));
    }else if(typeSubmit === 'update'){
      const requestUser = this.valueForm();
      this.store.dispatch(ToDoActions.updateUser({ payload: requestUser, id:id },));
    }
  }
  redirecTo(){
    this.router.navigate(['/'])
  }

  valueForm(): any{
    if(this.newUser.valid){
      const dateJobss = moment(this.newUser.get('dateJobs')?.value).format('DD/MM/YYYY')
      const birthdays = moment(this.newUser.get('birthday')?.value).format('DD/MM/YYYY')
      const formData = this.newUser.value

      const {
      name,
      country,
      nameUser,
      state,
      area,
      position,
      commission
      } = formData

      const requestUser =  {
        name,
        birthday : birthdays,
        country,
        nameUser,
        dateJobs : dateJobss,
        state,
        area,
        position,
        commission
      }
      return requestUser;
    }
  }
}