import nodemailer from "nodemailer";
import path from "path";
import axios from "axios";
import { getSMTPProfile } from "../../../lib/smtpProfile";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { from, to, subject, text, attachment, SMTPProfileCode = "HR" } = req.body;
      const smtpProfile = await getSMTPProfile(SMTPProfileCode);

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

      if (attachment) {
        const attachmentResponse = await axios.get(attachment, {
          responseType: "arraybuffer",
        });
        const attachmentData = Buffer.from(attachmentResponse.data, "binary");
        const fileExtension = path.extname(path.basename(attachment)) || ".pdf";

        mailOptions.attachments = [
          {
            filename: `Resume${fileExtension}`,
            content: attachmentData,
            contentType: fileExtension === ".pdf" ? "application/pdf" : undefined,
          },
        ];
      }

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
