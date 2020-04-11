import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../core/services/business.service';
import { Business } from '../../../core/model/business';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../core/model/user';
import { AuthService } from '../../../auth/auth.service';
import { take} from 'rxjs/operators';

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
    current_user: any;
    owner_user: any;


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
        this.current_user = await this.authService.user.pipe(take(1)).toPromise();
                console.log(this.current_user);

        this.owner_user = (await this.business.user.get()).data();
        console.log(this.owner_user);


    }


     delete(){
                 let business_id: string = this.activatedRoute.snapshot.paramMap.get('business_id');

        this.businessService.delete(business_id)
        this.router.navigateByUrl('/app/negocios')

    }

}
