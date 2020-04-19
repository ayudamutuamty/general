import * as functions from 'firebase-functions';
import * as sgMail from '@sendgrid/mail';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//  export GOOGLE_APPLICATION_CREDENTIALS="/home/ccastillo/Documents/covid19/functions/covid19-273816-0a4922a6f109.json"
//echo "export SENDGRID_API_KEY='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'" > sendgrid.env



export const helloWorld = functions.https.onRequest((request, response) => {


    sendGoodbyeEmail('ccastillo@tegik.com', 'Hello');
    response.send("Hello from Firebase!");
});

// Sends a goodbye email to the given user.
async function sendGoodbyeEmail(email: string, displayName: string) {

    sgMail.setApiKey('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');
    const msg = {
        to: 'cesar.cast.more@gmail.com',
        from: email,
        subject: displayName,
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg)
        .then(() => {}, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
        
    console.log('Account deletion confirmation email sent to:', email);
    return null;
}
