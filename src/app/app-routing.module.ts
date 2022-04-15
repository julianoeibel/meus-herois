import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { InformHeroisComponent } from './inform-herois/inform-herois.component';


const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch: 'full' },
  { path:'dashboard', component: DashboardComponent },
  { path:'inform-herois', component: InformHeroisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
