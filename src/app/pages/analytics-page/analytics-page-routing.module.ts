import { AnalyticsPageComponent } from './analytics-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ {path:'',component:AnalyticsPageComponent,data:{shouldReuse:true,key:'analytics'}},  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsPageRoutingModule { }
