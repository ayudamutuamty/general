import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    constructor(private storage: AngularFireStorage) {
    	
    }


    uploadFile(event: any): Promise<string> {
        return new Promise<any>((resolve, reject) => {
    	console.log(event);
        const file = event.files[0];
        const filePath = file.name;
        this.storage.upload(filePath, file).then(doc=>{
            doc.ref.getDownloadURL().then(url=>{
                resolve(url);
            })
            //console.log(doc);
            //resolve(doc.metadata.downloadURLs);
 
        })
    });

    }

}
