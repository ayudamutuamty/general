import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {


    contactForm: FormGroup = new FormGroup({
        first_name: new FormControl(),
        last_name: new FormControl(),
        email: new FormControl(),
        subject: new FormControl(),
        body: new FormControl()

    })

    constructor() {}

    ngOnInit(): void {}


    send(){
        
    }

}
