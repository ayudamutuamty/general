import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyNoticePageRoutingModule } from './privacy-notice-page-routing.module';
import { PrivacyNoticePageComponent } from './privacy-notice-page.component';


@NgModule({
  declarations: [PrivacyNoticePageComponent],
  imports: [
    CommonModule,
    PrivacyNoticePageRoutingModule
  ]
})
export class PrivacyNoticePageModule { }
