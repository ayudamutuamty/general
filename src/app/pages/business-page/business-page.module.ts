import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessPageRoutingModule } from './business-page-routing.module';
import { BusinessPageComponent } from './business-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewComponent } from './new/new.component';
import { DistanceComponent } from './distance/distance.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';

import { ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environment';
import { InformationComponent } from './information/information.component';
import { SortDistancePipe } from './pipes/sort-distance.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [BusinessPageComponent, NewComponent, 
    DistanceComponent, InformationComponent, SortDistancePipe, FilterPipe],
    imports: [
        CommonModule,
        BusinessPageRoutingModule,
        MatIconModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSliderModule,
        AgmCoreModule.forRoot({
            apiKey: environment.google.apiKey
        })
    ]
})
export class BusinessPageModule {}
