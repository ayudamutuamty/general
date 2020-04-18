import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SendEmailService {

    private api: string = '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';
    private url: string='https://api.sendgrid.com/v3/mail/send';


    constructor(private http: HttpClient) {}

    send(request: Request): Observable<any> {

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + this.api);
        headers = headers.set('Content-Type', 'application/json');
        return this.http.post(this.url, request);
    }
}


interface Request {
    personalizations: Personalization[];
    subject: string;
    content: Content[];
    from: From;
}

interface Personalization {
    to: To[];

}

interface Content {
    type: string;
    value: string;

}

interface From {
    email: string;
}

interface To {
    email: string;
}
