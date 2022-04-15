import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformHeroisComponent } from './inform-herois/inform-herois.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [							
    AppComponent,
      NavComponent,
      DashboardComponent,
      InformHeroisComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
