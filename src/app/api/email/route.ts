import 'dotenv';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(req: Request) {
    const { email } = await req.json();

    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL,
            subject: "Roster member added alert",
            text: email,
        });
        return Response.json({ message: "Email sent successfully", info }, { status: 200 });
    } catch (err) {
        console.error("Error sending email:", err);
        return Response.json({ message: "Failed to send email", error: err }, { status: 500 });
    }
}
