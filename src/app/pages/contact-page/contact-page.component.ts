import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactsService } from '../../core/services/contacts.service';
import { Contact } from '../../core/model/contact';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
    providers: [ContactsService]
})
export class ContactPageComponent implements OnInit {


    contactForm: FormGroup = new FormGroup({
        first_name: new FormControl(),
        last_name: new FormControl(),
        email: new FormControl(),
        subject: new FormControl(),
        body: new FormControl()

    })

    constructor(private contactService: ContactsService) {}

    ngOnInit(): void {}


    async send() {

        let contact: Contact = this.contactForm.value;
        contact = await this.contactService.create(contact);
        this.contactForm.reset();



    }

}
