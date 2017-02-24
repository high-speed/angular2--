import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { PagesRoutingModule }       from './pages-routing.module';
 import {PageComponent} from "./page.component";


@NgModule({
  imports: [CommonModule,PagesRoutingModule,
  ],

  declarations: [PageComponent,]
})
export class PagesModule {
}
