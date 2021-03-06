import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GeolocationService {

    private url = 'https://maps.googleapis.com/maps/api/geocode/json';

    constructor(private http: HttpClient) {}


    public getAddress(latitude: number, longitude: number): Observable < any > {

        let params: HttpParams = new HttpParams();
        params = params.set('latlng', latitude + ', ' + longitude);
        params = params.set('key', environment.google.apiKey);

        return this.http.get < any > (this.url, {
            params
        });
    }

    getLocation(): Observable < { latitude: number, longitude: number } > {
        return Observable.create(observe => {

            navigator.geolocation.getCurrentPosition(position => {
                observe.next({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })

                observe.complete();
            })
        })
    }

}
