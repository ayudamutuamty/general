import { Component, OnInit } from '@angular/core';
import { Business } from '../../core/model/business';
import { Observable } from 'rxjs';
import { BusinessService } from '../../core/services/business.service';
import { Router } from '@angular/router';
import { GeolocationService } from '../../core/services/geolocation.service';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
    selector: 'app-business-page',
    templateUrl: './business-page.component.html',
    styleUrls: ['./business-page.component.scss'],
    providers: [BusinessService, GeolocationService]
})
export class BusinessPageComponent implements OnInit {

    businesses$: Observable < Business[] > ;
    public max_distance=5;

    filterForm: FormGroup= new FormGroup({
        core_business: new FormControl()
    })




    constructor(private businessService: BusinessService,
        private router: Router, private geo: GeolocationService) {

    }

    ngOnInit(): void {
        this.initBusiness();


    }

    async initBusiness() {
        const location = await this.geo.getLocation().toPromise();
        this.businesses$ = this.businessService.getAllWithDistance(location.latitude, location.longitude);

    }

    go(business_id: string) {
        this.router.navigateByUrl('/app/negocios/' + business_id);
    }


    formatLabel(value: number) {
        return value + 'k';
    }


    changeSliderDistanca(event){
        this.max_distance= event.value;

    }

}
