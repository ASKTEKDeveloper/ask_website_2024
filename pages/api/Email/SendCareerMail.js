import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { getSMTPProfile } from "../../../lib/smtpProfile";

const getBase64Attachment = (attachmentBase64, attachmentMimeType, attachmentName) => {
  if (!attachmentBase64 || typeof attachmentBase64 !== "string") return null;

  const cleanBase64 = attachmentBase64.replace(/^data:.*;base64,/, "");
  if (!cleanBase64) return null;

  return {
    filename: attachmentName || "Resume.pdf",
    content: Buffer.from(cleanBase64, "base64"),
    contentType: attachmentMimeType || "application/octet-stream",
  };
};

const getLocalAttachment = (resumeValue) => {
  if (!resumeValue || typeof resumeValue !== "string") return null;

  const possiblePaths = [
    path.join(process.cwd(), "public", "uploads", "careers", resumeValue),
    path.join(process.cwd(), "uploads", "careers", resumeValue),
    path.join(process.cwd(), resumeValue),
    resumeValue,
  ];

  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      return {
        filePath: possiblePath,
        fileName: path.basename(possiblePath),
      };
    }
  }

  return null;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const {
      from,
      to,
      subject,
      text,
      attachment,
      attachmentBase64,
      attachmentMimeType,
      attachmentName,
      SMTPProfileCode = "HR",
    } = req.body;
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
      to,
      subject,
      html: text,
    };

    const base64Attachment = getBase64Attachment(
      attachmentBase64,
      attachmentMimeType,
      attachmentName || (typeof attachment === "string" ? path.basename(attachment) : "Resume.pdf")
    );

    if (base64Attachment) {
      mailOptions.attachments = [base64Attachment];
    } else {
      const localAttachment = getLocalAttachment(attachment);
      if (localAttachment) {
        mailOptions.attachments = [
          {
            filename: localAttachment.fileName,
            content: fs.readFileSync(localAttachment.filePath),
          },
        ];
      }
    }

    const info = await transporter.sendMail(mailOptions);
    console.log("Career mail sent:", info.messageId);
    return res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Career mail error:", error);
    return res.status(500).json({ error: "An error occurred while sending email." });
  }
}
