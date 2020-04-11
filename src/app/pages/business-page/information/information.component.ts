import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../core/services/business.service';
import { Business } from '../../../core/model/business';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../core/model/user';
import { AuthService } from '../../../auth/auth.service';

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
    owner: any;
    current_user: any;

    constructor(private businessService: BusinessService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private authService: AuthService) {}

    ngOnInit(): void {

        this.getBusiness();

    }


    async getBusiness() {
        let business_id: string = this.activatedRoute.snapshot.paramMap.get('business_id');
        this.business = await this.businessService.get(business_id);
        this.longitude = this.business.location.longitude;
        this.latitude = this.business.location.latitude;
        this.current_user = await this.authService.user.toPromise();
        this.business.user.get().then(doc=> {
            if(doc.exists){
                this.owner= doc.data();
            }
        });

        

    }


     delete(){
                 let business_id: string = this.activatedRoute.snapshot.paramMap.get('business_id');

        this.businessService.delete(business_id)
        this.router.navigateByUrl('/app/negocios')

    }

}
