import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewUserPageService {
    constructor(private http: HttpClient){
    }

    getAllCountrys(): Observable<any>{
        return this.http.get('https://restcountries.eu/rest/v2/all');
    }
}
