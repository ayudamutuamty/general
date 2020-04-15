import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    constructor(private storage: AngularFireStorage) {
    	
    }


    uploadFile(event: any) {
    	console.log(event);
    const file = event.files[0];
    const filePath = file.name;
    const task = this.storage.upload(filePath, file);
    }

}
