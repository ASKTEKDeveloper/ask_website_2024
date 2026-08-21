import nodemailer from "nodemailer";
import path from "path";
import axios from "axios";
import { getSMTPProfile } from "../../../lib/smtpProfile";

const normalizeAttachmentUrl = (rawUrl) => {
  if (!rawUrl || typeof rawUrl !== "string") return "";

  const trimmed = rawUrl.trim();
  if (!trimmed) return "";

  try {
    const parsed = new URL(trimmed);
    if (["localhost", "127.0.0.1"].includes(parsed.hostname)) {
      parsed.protocol = "https:";
      parsed.hostname = "asktek.net";
      parsed.port = "";
      return parsed.toString();
    }

    return trimmed;
  } catch (error) {
    return trimmed;
  }
};

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

      if (attachment && typeof attachment === "string" && attachment.trim()) {
        const normalizedAttachmentUrl = normalizeAttachmentUrl(attachment);

        try {
          const attachmentResponse = await axios.get(normalizedAttachmentUrl, {
            responseType: "arraybuffer",
            timeout: 120000,
            validateStatus: (status) => status >= 200 && status < 300,
          });

          const attachmentData = Buffer.from(attachmentResponse.data, "binary");
          const fileExtension = path.extname(path.basename(normalizedAttachmentUrl)) || ".pdf";

          mailOptions.attachments = [
            {
              filename: `Resume${fileExtension}`,
              content: attachmentData,
              contentType: fileExtension === ".pdf" ? "application/pdf" : "application/octet-stream",
            },
          ];
        } catch (attachmentError) {
          console.warn(
            "Attachment download failed, sending email without attachment:",
            attachmentError.message,
            "URL:",
            normalizedAttachmentUrl
          );
        }
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
