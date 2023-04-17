import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./page-login/page-login.component";
import {PageInscriptionComponent} from "./page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./page-dashboard/page-dashboard.component";
import * as path from "path";
import {PageStastiquesComponent} from "./page-stastiques/page-stastiques.component";

const routes: Routes = [

  {
    path:'login', component:PageLoginComponent
  },
  {
    path:'inscrire', component:PageInscriptionComponent
  },
  {
    path:'dashboard', component:PageDashboardComponent,
    children:[
      {
        path:'stats', component:PageStastiquesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
