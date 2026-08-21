import multer from "multer";
import axios from "axios";
import FormData from "form-data";

const upload = multer().single("file");
const FILE_SAVE_BASE_URL =
  process.env.ASK_FILE_SAVE_BASE_URL || "https://live.asktek.net";
const FILE_SAVE_API_URL =
  process.env.ASK_FILE_SAVE_API_URL ||
  `${FILE_SAVE_BASE_URL.replace(/\/+$/, "")}/ASKFileSaveAPI/api/AskFileSave`;

export const config = {
  api: {
    bodyParser: false,
  },
};

const getFileNameFromResponse = (payload) => {
  if (!payload) return "";

  if (typeof payload === "string") return payload;

  if (payload.fileName) return payload.fileName;
  if (payload.path?.fileName) return payload.path.fileName;
  if (payload.path) {
    if (typeof payload.path === "string") return payload.path;
    if (payload.path.fileName) return payload.path.fileName;
  }
  if (payload.filename) return payload.filename;
  if (payload.FileName) return payload.FileName;

  return "";
};

const buildFileUrl = (fileName) => {
  if (!fileName) return "";

  if (/^https?:\/\//i.test(fileName)) {
    return fileName;
  }

  const cleanFileName = fileName.replace(/^\/+/, "");
  return `${FILE_SAVE_BASE_URL.replace(/\/+$/, "")}/${cleanFileName}`;
};

export default async function handler(req, res) {
  try {
    upload(req, res, async function (err) {
      if (err) {
        console.error("Error uploading file:", err);
        res.status(500).json({ error: "Error uploading file" });
        return;
      }

      const file = req.file;

      if (!file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
      }

      const formData = new FormData();
      formData.append("doc1", file.buffer, { filename: file.originalname });

      const response = await axios.post(FILE_SAVE_API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 120000,
      });

      const fileName = getFileNameFromResponse(response.data);
      const fileUrl = buildFileUrl(fileName);

      console.log("Server API response:", response.data);

      res.status(200).json({
        message: "File uploaded successfully",
        path: response.data,
        fileName,
        fileUrl,
      });
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "Error uploading file" });
  }
}
