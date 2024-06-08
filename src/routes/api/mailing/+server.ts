import {EMAIL_USERNAME, EMAIL_PASS, SMTP_PORT, EMAIL, SMTP_HOST} from "$env/static/private";
import nodemailer from 'nodemailer';
import {json} from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    const {subject, email, message} = await request.json();

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: true,
        auth: {
            user: EMAIL_USERNAME,
            pass: EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: EMAIL_USERNAME,
        to: EMAIL,
        subject: `${subject} - ${email}`,
        text: message
    };

    transporter.sendMail(mailOptions);

    return json({success: true, message: 'Email sent successfully'});
}