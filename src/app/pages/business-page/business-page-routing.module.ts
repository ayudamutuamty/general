import { BusinessPageComponent } from './business-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { DistanceComponent } from './distance/distance.component';
import { InformationComponent } from './information/information.component';


const routes: Routes = [{
        path: 'distance',
        component: DistanceComponent
    }, {
        path: 'new',
        component: NewComponent
    },
    {
        path: '',
        component: BusinessPageComponent,
        data: { shouldReuse: true, key: 'business' }
    }, {
        path: ':business_id/information',
        component: InformationComponent

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusinessPageRoutingModule {}
