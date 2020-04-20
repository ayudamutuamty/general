import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MailService } from '../../core/services/mail.service';
import { Mail } from '../../core/model/mail';
import { Contact } from '../../core/model/contact';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
    providers: [MailService]
})
export class ContactPageComponent implements OnInit {


    contactForm: FormGroup = new FormGroup({
        first_name: new FormControl(),
        last_name: new FormControl(),
        email: new FormControl(),
        subject: new FormControl(),
        body: new FormControl()

    })

    constructor(private mailService: MailService) {}

    ngOnInit(): void {}


    async send() {

        let contact: Contact = this.contactForm.value;
        let text: string = 'Correo: ' + contact.email + '\n';
        text += 'Nombre: ' + contact.first_name + ' ' + contact.last_name + '\n';
        text += 'Descripcion: ' + contact.body;

        let mail: Mail = {
            to: ['ayudamutuamty@gmail.com'],
            message: {
                subject: contact.subject,
                text: text
            }
        }
        mail = await this.mailService.create(mail);
        this.contactForm.reset();



    }

}
