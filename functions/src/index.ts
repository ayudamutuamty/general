import * as functions from 'firebase-functions';
import * as sgMail from '@sendgrid/mail';
import { sendGrid } from './sendgrid';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//  export GOOGLE_APPLICATION_CREDENTIALS="/home/ccastillo/Documents/covid19/functions/covid19-273816-0a4922a6f109.json"


export const helloWorld = functions.https.onRequest((request, response) => {

    let contact: any = {
        body: "asunto",
        email: "cesar.cast.more@gmail.com",
        first_name: "Soriana",
        id: "1hKwNviFsXgXGsYJvdrN",
        last_name: "soriana",
        subject: "Asunto"

    }



    let text: string = contact.email + '\n';
    text += contact.first_name + ' ' + contact.last_name + '\n';
    text += contact.body;

    sgMail.setApiKey(sendGrid.api);

    const msg = {
        from: 'ccastillo@tegik.com',
        to: 'cesar.cast.more@gmail.com',
        subject: contact.subject,
        text: text,
    };

    console.log("MESSAGE", msg);

    sgMail.send(msg).then((success: any) => {
        console.log(success);
    }, error => {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    });

    response.send("Hello from Firebase!");


});


exports.createContact = functions.firestore
    .document('/contacts/{id}')
    .onCreate((snap, context) => {

        let contact: any = snap.data();


        let text: string = contact.email + '\n';
        contact += contact.first_name + ' ' + contact.last_name + '\n';
        text += contact.body;

        sgMail.setApiKey(sendGrid.api);
        const msg = {
            from: 'ccastillo@tegik.com',
            to: 'cesar.cast.more@tegik.com',
            subject: contact.subject,
            text: text,
            html: '',
        };
        return sgMail.send(msg);

    });
