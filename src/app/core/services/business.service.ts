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

    get(id: string): Promise < Business > {

        let docRef = this.firestore.collection("businesses").doc(id);

        return new Promise < Business > ((resolve, reject) => {
            this.firestore.collection("businesses").doc(id).ref.get().then(function(doc) {
                if (doc.exists) {
                    resolve(doc.data() as Business);
                } else {
                    // doc.data() will be undefined in this case
                    resolve(null);

                }
            }).catch(function(error) {
                reject("Error getting document:" + error);
            });

        })


    }
}
