import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './profile-page.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ProfilePageModule { }
