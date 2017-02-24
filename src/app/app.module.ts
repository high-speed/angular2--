import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import{NgbModule}from'@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import {AppComponent} from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./page/home/home.component";
import {SideLeftComponent} from "./side/side-left/side-left.component";
import {PageComponent} from "./page/page.component";
import {BarTopComponent} from "./side/bar-top/bar-top.component";
import {ToastrModule} from "ngx-toastr";
import { LoginComponent } from './page/login/login.component';
import {AppRoutingModule} from "./app.routing";
import {PagesModule} from "./page/pages.module";
 import {PagesRoutingModule} from "./page/pages-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideLeftComponent,
    BarTopComponent,
    PageComponent,
    LoginComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    Ng2SmartTableModule,
    PagesRoutingModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

