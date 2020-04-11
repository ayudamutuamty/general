import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../core/services/business.service';
import { Business } from '../../../core/model/business';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.scss'],
    providers: [BusinessService]
})
export class InformationComponent implements OnInit {

    business: Business;

    latitude: number;
    longitude: number;

    constructor(private businessService: BusinessService,
        private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {

        this.getBusiness();

    }


    async getBusiness() {
        let business_id: string = this.activatedRoute.snapshot.paramMap.get('business_id');
        this.business = await this.businessService.get(business_id);
        this.longitude = this.business.location.longitude;
        this.latitude = this.business.location.latitude;

    }

}
