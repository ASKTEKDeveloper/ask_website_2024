import nodemailer from "nodemailer";
import { getSMTPProfile } from "../../../lib/smtpProfile";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { from, to, subject, text, attachment } = req.body;
      const smtpProfile = await getSMTPProfile("SALES");

      const transporter = nodemailer.createTransport({
        host: smtpProfile.SMTPHost,
        port: Number(smtpProfile.SMTPPort),
        secure: smtpProfile.IsSecure === "Y",
        auth: {
          user: smtpProfile.SMTPUserName,
          pass: smtpProfile.SMTPPassword,
        },
      });
      
      const mailOptions = {
        from: from || smtpProfile.FromEmail,
        to: to,
        subject: subject,
        html: text,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Message sent: %s", info.messageId);

      res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "An error occurred while sending email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
