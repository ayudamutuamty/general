import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsPageRoutingModule } from './analytics-page-routing.module';
import { AnalyticsPageComponent } from './analytics-page.component';


@NgModule({
  declarations: [AnalyticsPageComponent],
  imports: [
    CommonModule,
    AnalyticsPageRoutingModule
  ]
})
export class AnalyticsPageModule { }
