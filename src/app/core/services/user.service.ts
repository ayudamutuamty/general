import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../model/user';
import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private firestore: AngularFirestore) {}


    create(user: User): Promise < User > {
        return new Promise < User > ((resolve, reject) => {
            this.firestore
                .collection("users")
                .doc(user.uid)
                .set(user)
                .then(res => { return resolve(user) }, err => reject(err));
        });


    }


    get(uuid: string): Promise < User > {

        let docRef = this.firestore.collection("users").doc(uuid);

        return new Promise < User > ((resolve, reject) => {
            this.firestore.collection("users").doc(uuid).ref.get().then(function(doc) {
                if (doc.exists) {
                    resolve(doc.data() as User);
                } else {
                    // doc.data() will be undefined in this case
                    resolve(null);

                }
            }).catch(function(error) {
                reject("Error getting document:" + error);
            });

        })


    }


    getUserReference(uid: string): firebase.firestore.DocumentReference {
        return this.firestore.collection('user').doc(uid).ref;

    }


}
