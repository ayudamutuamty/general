import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Mail } from '../model/mail';

@Injectable({
    providedIn: 'root'
})
export class MailService {

    constructor(private firestore: AngularFirestore) {}

    create(mail: Mail): Promise < Mail > {
        return new Promise < Mail > ((resolve, reject) => {

            this.firestore.collection('mail')
                .add(mail)
                .then(ref => {
                    return resolve(mail);
                }, err => {
                    reject(err);
                });
        });
    }
}
