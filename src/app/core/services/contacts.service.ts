import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class ContactsService {

    constructor(private firestore: AngularFirestore) {}

    create(contact: Contact): Promise < Contact > {
        return new Promise < Contact > ((resolve, reject) => {

            this.firestore.collection('contacts')
                .add(contact)
                .then(ref => {
                    ref.set({ id: ref.id }, { merge: true }).then(res => {
                            console.log(res);
                            return resolve(contact);
                        },
                        err => {
                            reject(err);
                        });

                });
        });

    }
}
