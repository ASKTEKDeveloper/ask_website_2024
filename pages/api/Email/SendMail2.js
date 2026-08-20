import nodemailer from "nodemailer";
import path from "path";
import axios from "axios";
import { getSMTPProfile } from "../../../lib/smtpProfile";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { from, to, subject, text, attachment } = req.body;
      const smtpProfile = await getSMTPProfile("HR");

      const transporter = nodemailer.createTransport({
        host: smtpProfile.SMTPHost,
        port: Number(smtpProfile.SMTPPort),
        secure: smtpProfile.IsSecure === "Y",
        auth: {
          user: smtpProfile.SMTPUserName,
          pass: smtpProfile.SMTPPassword,
        },
      });

      // Download the file from the URL and convert to Buffer
      const attachmentUrl = attachment;
      const attachmentResponse = await axios.get(attachmentUrl, {
        responseType: "arraybuffer",
      });
      const attachmentData = Buffer.from(attachmentResponse.data, "binary");

      // Get the original filename and extension
      const originalFileName = path.basename(attachmentUrl);
      const fileExtension = path.extname(originalFileName);

      // Generate a new filename
      const newFilename = `Resume${fileExtension}`;

      const mailOptions = {
        from: from || smtpProfile.FromEmail,
        to: to,
        subject: subject,
        html: text,
        attachments: [
          {
            filename: newFilename,
            content: attachmentData,
            contentType: `application/${fileExtension.substring(1)}`,
          },
        ],
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
