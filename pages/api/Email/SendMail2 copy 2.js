import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { from, to, subject, text, attachment } = req.body;

      const transporter = nodemailer.createTransport({
        host: "us2.smtp.mailhostbox.com",
        port: 587,
        secure: false,
        auth: {
          user: "hr@asktek.net",
          pass: "Saima@99559#",
        },
      });

      const attachmentUrl = attachment;
      const attachmentResponse = await axios.get(attachmentUrl, {
        responseType: "arraybuffer", // Ensure response is treated as binary
      });

      const attachmentData = Buffer.from(attachmentResponse.data, "binary");

      // // Read the attachment file
      // const attachmentPath = path.join(process.cwd(), "pages/api", attachment);
      // const attachmentData = fs.readFileSync(attachmentPath);

      // Get the original file name and extension
      const originalFileName = path.basename(attachment);
      const fileExtension = path.extname(originalFileName);

      // Generate a new filename
      const newFilename = `Resume${fileExtension}`;

      const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: text,
        attachments: attachmentData,
        attachments: [{ filename: newFilename, content: attachmentData }],
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
