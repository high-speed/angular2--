import { Routes, RouterModule }  from '@angular/router';

import { NgModule} from '@angular/core';
import {LoginComponent} from "./login/login.component";
 import {PageComponent} from "./page.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  { path: 'login',    component: LoginComponent  },
  {path: '',    redirectTo: '/login',    pathMatch: 'full'  },
  {
    path:'pages',
    component:PageComponent,




  }

 ];


@NgModule({
  imports: [
     RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
