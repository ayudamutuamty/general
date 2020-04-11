import { Injectable } from '@angular/core';
import { Business } from '../model/business';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
}
