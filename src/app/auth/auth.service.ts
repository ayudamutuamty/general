import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../core/services/storage/storage.service';
import { StorageKey } from '../core/services/storage/storage.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    redirectUrl: string;
    user: Observable < firebase.User > ;

   

    constructor(
        private afAuth: AngularFireAuth) {
        this.user = afAuth.authState;

    }

    public async login(email: string, password: string) {
        try {
            const token = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
            return this.redirectUrl;
        } catch (error) {
            console.error('Error during login request', error);
            return Promise.reject(error);
        }
    }


    public async signup(email: string, password: string) {
        try {
            const token = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            return this.redirectUrl;
        } catch (error) {
            console.error('Error during login request', error);
            return Promise.reject(error);
        }
    }


    public logout() {
        this.afAuth.auth.signOut();
    }


}
