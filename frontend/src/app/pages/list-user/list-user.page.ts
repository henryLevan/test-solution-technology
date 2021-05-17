import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.sass']
})
export class ListUserPage {
  title = 'prueba-tecnica';
  constructor(private router: Router){}

  redirecTo(): void{
      this.router.navigate(['/nuevo-usuario'])
  }
  
}