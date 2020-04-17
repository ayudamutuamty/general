import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './contact-page.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ContactPageModule { }
