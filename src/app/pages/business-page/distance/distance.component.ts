import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { ActivatedRoute } from '@angular/router';
import { Business } from '../../../core/model/business';
import { Observable } from 'rxjs';
import { BusinessService } from '../../../core/services/business.service';


interface marker {
    lat: number;
    lng: number;
}

@Component({
    selector: 'app-distance',
    templateUrl: './distance.component.html',
    styleUrls: ['./distance.component.scss']
})
export class DistanceComponent implements OnInit {

    latitude: number;
    longitude: number;
    private geoCoder;

    businesses$: Observable < Business[] > ;

    // Radius
    radius;
    distance;

    zoom;

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private activatedRouter: ActivatedRoute,
        private businessService: BusinessService
    ) {

    }


    ngOnInit() {
        //load Map

        this.distance = this.activatedRouter.snapshot.queryParamMap.get('distance');
        this.radius = 1000 * Number(this.distance);


        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
        });

    }

    // Get Current Location Coordinates
    private setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 13;

                this.businesses$ = this.businessService.getAllWithDistance(this.latitude, this.longitude);


            });
        }
    }



}
