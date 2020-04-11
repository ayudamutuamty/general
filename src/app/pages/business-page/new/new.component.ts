import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { Observable } from 'rxjs';
import { BusinessService } from '../../../core/services/business.service';
import { Business } from '../../../core/model/business';
import { User } from '../../../core/model/user';
import { UserService } from '../../../core/services/user.service';
import { take } from 'rxjs/operators';
import { AgmMarker } from '@agm/core';
import * as firebase from 'firebase/app';
import { GeolocationService } from '../../../core/services/geolocation.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss'],
    providers: [BusinessService, UserService, GeolocationService]
})
export class NewComponent implements OnInit {

    location$: Observable < { latitud: number, longitude: number } > ;

    @ViewChild(AgmMarker) agmMarker: AgmMarker;

    businessForm: FormGroup = new FormGroup({
        phone: new FormControl(),
        name: new FormControl(),
        core_business: new FormControl(),
        code_postal: new FormControl(),
        address: new FormControl(),
        state: new FormControl(),
        city: new FormControl(),
        email: new FormControl(),
        description: new FormControl(),
        type_of_operation: new FormGroup({
            owner_delivery: new FormControl(false),
            app_delivery: new FormControl(false),
            client_delivery: new FormControl(false),
            just_to_go: new FormControl(false),
            pre_order: new FormControl(false),
            pick_up_shop: new FormControl(false),
            other: new FormControl()
        }),
        service: new FormGroup({
            closed: new FormControl(false),
            opened: new FormControl(false),
            limited_open: new FormControl(false),
            opened_without_spaces: new FormControl(false),
            delivery: new FormControl(false),
            send: new FormControl(false)
        }),
        facebook: new FormControl(),
        instragram: new FormControl(),
        website: new FormControl()

    })

    constructor(private authService: AuthService,
        private bs: BusinessService,
        private us: UserService,
        private geolocationService: GeolocationService,
        private router: Router) {}

    ngOnInit(): void {

        this.location$ = this.getLocation();

    }



    async save() {

        let user = await this.authService.user.pipe(take(1)).toPromise();
        let business: Business = this.businessForm.value;
        business.location = new firebase.firestore.GeoPoint(this.agmMarker.latitude, this.agmMarker.longitude);
        business.user = this.us.getUserReference(user.uid);
        let res = await this.bs.create(business);

                this.router.navigateByUrl('/app/business')



    }


    getLocation(): Observable < { latitud: number, longitude: number } > {
        return Observable.create(observe => {

            navigator.geolocation.getCurrentPosition(position => {
                observe.next({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
                this.geolocationService.getAddress(position.coords.latitude, position.coords.longitude)
                    .subscribe(address => this.getFormatAddress(address))
                observe.complete();
            })
        })
    }


    dragEnd(event) {
        this.geolocationService.getAddress(event.coords.lat, event.coords.lng)
            .subscribe(address => this.getFormatAddress(address))



    }

    getFormatAddress(address) {

        if (address.results && address.results.length > 0) {
            if (address.results[0].formatted_address)
                this.businessForm.patchValue({
                    address: address.results[0].formatted_address
                })


            for (let comp of address.results[0].address_components) {
                if (comp.types[0] == 'postal_code') {
                    this.businessForm.patchValue({
                        code_postal: comp.long_name
                    })
                } else if (comp.types[0] == 'locality') {
                    this.businessForm.patchValue({
                        city: comp.long_name
                    })
                } else if (comp.types[0] == 'administrative_area_level_1') {
                    this.businessForm.patchValue({
                        state: comp.long_name
                    })
                } else if (comp.types[0] == 'country') {
                    this.businessForm.patchValue({
                        country: comp.long_name
                    })
                }


            }
        }

    }

}
