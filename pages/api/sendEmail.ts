import sgMail from "@sendgrid/mail";
import {NextApiRequest, NextApiResponse} from "next";

export const sendEmail = async (email: string, body: string, phone?: string) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'swsvindland@gmail.com', // Change to your recipient
        from: email, // Change to your verified sender
        subject: 'Svindland Portfolio Contact',
        text: body + ' \nphone number: ' + phone,
    }
    await sgMail.send(msg)
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, body, phone } = req.body
    await sendEmail(email, body, phone)
    res.status(200).json({ message: 'Email sent' })
}
