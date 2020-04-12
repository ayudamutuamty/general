import { Injectable } from '@angular/core';
import { Business } from '../model/business';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BusinessService {

    constructor(private firestore: AngularFirestore) {}

    create(business: Business): Promise < Business > {
        return new Promise < Business > ((resolve, reject) => {

            this.firestore.collection('businesses')
                .add(business)
                .then(ref => {
                    ref.set({ id: ref.id }, { merge: true }).then(res => {
                            console.log(res);
                            return resolve(business);
                        },
                        err => {
                            reject(err);
                        });

                });
        });

    }


    getAll(): Observable < any[] > {
        return this.firestore.collection('businesses').valueChanges();
    }


    getAllWithDistance(latitude: number, longitude: number): Observable < Business[] > {
        return this.getAll().pipe(
            map(results => {
                const businesses: Business[] = [];

                for (const res of results) {
                    const business: Business = res;
                    business.distance = this.distance(latitude, longitude,
                        business.location.latitude, business.location.longitude);
                    businesses.push(business);
                }

                return businesses;

            }))

    }

    get(id: string): Promise < Business > {

        const docRef = this.firestore.collection('businesses').doc(id);

        return new Promise < Business > ((resolve, reject) => {
            this.firestore.collection('businesses').doc(id).ref.get().then(function(doc) {
                if (doc.exists) {
                    resolve(doc.data() as Business);
                } else {
                    // doc.data() will be undefined in this case
                    resolve(null);

                }
            }).catch(function(error) {
                reject('Error getting document:' + error);
            });

        })


    }

    delete(id: string) {
        const docRef = this.firestore.collection('businesses').doc(id);
        docRef.delete();

    }


    private distance(lat1: number, lon1: number, lat2: number, lon2: number) {
        const p = 0.017453292519943295; // Math.PI / 180
        const c = Math.cos;
        const a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p)) / 2;

        return 12742 * Math.asin(Math.sqrt(a));
    }
}
