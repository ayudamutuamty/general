import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyNoticePageComponent } from './privacy-notice-page.component';


const routes: Routes = [{
	path: '',
	component: PrivacyNoticePageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyNoticePageRoutingModule { }
