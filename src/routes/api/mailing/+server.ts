import {env} from '$env/dynamic/private';
import nodemailer from 'nodemailer';
import {json} from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    const {subject, email, message} = await request.json();

    const transporter = nodemailer.createTransport({
        host: env.SMTP_HOST,
        port: env.SMTP_PORT,
        secure: true,
        auth: {
            user: env.EMAIL_USERNAME,
            pass: env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: env.EMAIL_USERNAME,
        to: env.EMAIL,
        subject: `${subject} - ${email}`,
        text: message
    };

    transporter.sendMail(mailOptions);

    return json({success: true, message: "Sent"});
}