import fs from "fs";
import path from "path";
import multer from "multer";

const uploadFolder = path.join(process.cwd(), "public", "uploads", "careers");
fs.mkdirSync(uploadFolder, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, uploadFolder),
  filename: (_req, file, callback) => {
    const safeBaseName = (file.originalname || "resume")
      .replace(/[^a-zA-Z0-9_.-]/g, "_")
      .replace(/_+/g, "_");
    const timestamp = Date.now();
    const extension = path.extname(safeBaseName) || ".pdf";
    const baseName = path.basename(safeBaseName, extension);
    callback(null, `${baseName}_${timestamp}${extension}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
}).single("file");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  upload(req, res, function (err) {
    if (err) {
      console.error("Error uploading file:", err);
      return res.status(500).json({ error: "Error uploading file" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const forwardedHost =
      req.headers["x-forwarded-host"] ||
      req.headers.host ||
      "asktek.net";
    const forwardedProto =
      req.headers["x-forwarded-proto"] ||
      (req.socket && req.socket.encrypted ? "https" : "http");

    const host = String(forwardedHost).split(",")[0].trim();
    const protocol = String(forwardedProto).split(",")[0].trim() || "https";

    const siteBaseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (host.includes("localhost") || host.includes("127.0.0.1")
        ? "https://asktek.net"
        : `${protocol}://${host}`) ||
      "https://asktek.net";

    const relativePath = `/uploads/careers/${req.file.filename}`;
    const fileUrl = `${siteBaseUrl.replace(/\/$/, "")}${relativePath}`;

    return res.status(200).json({
      message: "File uploaded successfully",
      fileUrl,
      path: {
        fileName: req.file.filename,
        url: fileUrl,
        relativePath,
      },
    });
  });
}
