import { Routes } from '@angular/router';
import { NewUserPage } from './pages/new-user/new-user.page';
import { ListUserPage } from './pages/list-user/list-user.page';

const rutas: Routes = [
    { path: '', component: ListUserPage },
    { path: 'nuevo-usuario', component: NewUserPage },
    { path: 'detalle/:id', component: NewUserPage },
    { path: 'editar/:idUpdate', component: NewUserPage }
  ];

export const rutasAll = rutas;