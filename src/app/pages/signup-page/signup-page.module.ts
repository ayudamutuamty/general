import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingPageModule } from './signup-routing-page.module';
import { SignupPageComponent } from './signup-page.component';
import { LogoModule } from '../../core/components/logo/logo.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [SignupPageComponent],
    imports: [
        CommonModule,
        SignupRoutingPageModule,
        LogoModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        FlexLayoutModule,
        FormsModule
    ]
})
export class SignupPageModule {}
