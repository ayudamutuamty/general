import * as functions from 'firebase-functions';
const sgMail = require('@sendgrid/mail');
import { sendGrid } from './sendgrid';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//  export GOOGLE_APPLICATION_CREDENTIALS="/home/ccastillo/Documents/covid19/functions/covid19-273816-0a4922a6f109.json"


exports.createContact = functions.firestore
    .document('/contacts/{id}')
    .onCreate((snap, context) => {


        let contact: any = snap.data();

        return new Promise((resolve, reject) => {


            let text: string = contact.email + '\n';
            text += contact.first_name + ' ' + contact.last_name + '\n';
            text += contact.body;

            sgMail.setApiKey(sendGrid.api);
            const msg = {
                from: 'ccastillo@tegik.com',
                to: 'cesar.cast.more@gmail.com',
                subject: contact.subject,
                html: text
            };

            sgMail.send(msg).then(
                () => {
                    resolve(true);
                },
                (error: any) => {
                    console.log(error)
                });
        })

    });
