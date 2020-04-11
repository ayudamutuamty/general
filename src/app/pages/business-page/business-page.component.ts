import { Component, OnInit } from '@angular/core';
import { Business } from '../../core/model/business';
import { Observable } from 'rxjs';
import { BusinessService } from '../../core/services/business.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-business-page',
    templateUrl: './business-page.component.html',
    styleUrls: ['./business-page.component.scss'],
    providers: [BusinessService]
})
export class BusinessPageComponent implements OnInit {

    businesses$: Observable < Business[] > ;

    constructor(private businessService: BusinessService,
        private router: Router) {}

    ngOnInit(): void {
        this.businesses$ = this.businessService.getAll();
    }

    go(business_id: string) {
        this.router.navigateByUrl('/app/business/' + business_id + '/information');
    }

}
