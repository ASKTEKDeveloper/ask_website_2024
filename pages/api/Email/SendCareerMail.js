import fs from "fs";
import path from "path";
import multer from "multer";
import nodemailer from "nodemailer";
import { getSMTPProfile } from "../../../lib/smtpProfile";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
}).single("file");

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseRecipients = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean);

  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.filter(Boolean);
  } catch (error) {}

  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

const getLocalAttachment = (resumeValue) => {
  if (!resumeValue || typeof resumeValue !== "string") return null;

  const cleanValue = resumeValue.trim();
  const fileNameFromUrl = cleanValue.includes("/") ? cleanValue.split("/").pop() : cleanValue;

  const possiblePaths = [
    path.join(process.cwd(), "public", "uploads", "careers", fileNameFromUrl),
    path.join(process.cwd(), "uploads", "careers", fileNameFromUrl),
    path.join(process.cwd(), fileNameFromUrl),
    fileNameFromUrl,
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

  upload(req, res, async function (err) {
    try {
      if (err) {
        console.error("Career mail upload error:", err);
        return res.status(500).json({ error: "Error preparing attachment" });
      }

      const body = req.body || {};
      const { from, subject, text, attachment, SMTPProfileCode = "HR" } = body;
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

      const recipients = parseRecipients(body.to || body.email || "");
      const fallbackRecipients = [
        body.email,
        "sathish.asktech@gmail.com",
        "hr@asktek.net",
      ].filter(Boolean);
      const mailTo = recipients.length ? recipients : fallbackRecipients;

      const mailOptions = {
        from: from || smtpProfile.FromEmail,
        to: mailTo,
        subject: subject || "Application for Job Opportunity at ASK Technology",
        html: text || `
          <p>Dear ${body.name || "Candidate"},</p>
          <p>Thank you for applying to ASK Technology.</p>
          <p><strong>Email:</strong> ${body.email || ""}</p>
          <p><strong>Phone:</strong> ${body.phone_number || ""}</p>
          <p><strong>Gender:</strong> ${body.gender || ""}</p>
          <p><strong>Experience:</strong> ${body.years_of_experience || ""}</p>
        `,
      };

      if (req.file && req.file.buffer) {
        mailOptions.attachments = [
          {
            filename: req.file.originalname || "resume.pdf",
            content: req.file.buffer,
            contentType: req.file.mimetype || "application/octet-stream",
          },
        ];
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
  });
}
