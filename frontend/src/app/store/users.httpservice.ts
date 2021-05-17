import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ToDo from './users.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoHttpService {
  private ApiURL: string = 'http://localhost:3000/users/';
  private headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  constructor(private httpclient: HttpClient) {}

  createNewUser(user: ToDo): Observable<ToDo[]> {
    return this.httpclient.post<any>(this.ApiURL, JSON.stringify(user),{ 'headers': this.headers });
  }

  getAllUsers(): Observable<ToDo> {
    return this.httpclient.get<ToDo>(this.ApiURL,{ 'headers': this.headers });
  }

  getUser(id:string): Observable<ToDo> {
    return this.httpclient.get<ToDo>(this.ApiURL+id,{ 'headers': this.headers });
  }

  deleteUser(id: string): Observable<any> {
    return this.httpclient.delete<any>(this.ApiURL+id,{ 'headers': this.headers });
  }

  updateUser(data:any): Observable<any> {
    return this.httpclient.put<any>(this.ApiURL+data.payload, data.body,{ 'headers': this.headers });
  }

}
