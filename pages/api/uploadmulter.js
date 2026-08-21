import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
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

    const originalName = String(req.file.originalname || "resume");
    const safeName = originalName
      .replace(/[^a-zA-Z0-9_.-]/g, "_")
      .replace(/_+/g, "_");

    return res.status(200).json({
      message: "File uploaded successfully",
      fileName: safeName,
      mimeType: req.file.mimetype,
      size: req.file.size,
      base64: req.file.buffer.toString("base64"),
      path: {
        fileName: safeName,
        url: "",
      },
    });
  });
}
