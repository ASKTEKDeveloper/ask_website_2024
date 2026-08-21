import multer from "multer";
import axios from "axios";
import FormData from "form-data";

const upload = multer().single("file");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    upload(req, res, async function (err) {
      if (err) {
        console.error("Error uploading file:", err);
        return res.status(500).json({ error: "Error uploading file", detail: err.message });
      }

      const file = req.file;
      if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const formData = new FormData();
      formData.append("doc1", file.buffer, { filename: file.originalname });

      const uploadUrls = [
        "https://asktek.net/ASKFileSaveAPI/api/AskFileSave",
        "https://live.asktek.net/ASKFileSaveAPI/api/AskFileSave",
        "http://vc.asktek.net/ASKFileSaveAPI/api/AskFileSave",
      ];

      let responseData = null;
      let lastError = null;

      for (const uploadUrl of uploadUrls) {
        try {
          const response = await axios.post(uploadUrl, formData, {
            headers: {
              ...formData.getHeaders(),
            },
            timeout: 120000,
          });
          responseData = response.data;
          break;
        } catch (error) {
          lastError = error;
          console.error(`Upload failed for ${uploadUrl}:`, error.response?.status || error.code, error.message);
        }
      }

      if (!responseData) {
        const errorMessage = lastError?.message || "File upload failed";
        return res.status(500).json({ error: "Error uploading file", detail: errorMessage });
      }

      const normalized = responseData?.path || responseData;
      const fileUrl =
        normalized?.url ||
        normalized?.fileUrl ||
        (normalized?.fileName ? `https://asktek.net/uploads/careers/${normalized.fileName}` : "") ||
        "";

      return res.status(200).json({
        message: "File uploaded successfully",
        path: normalized,
        fileUrl,
      });
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return res.status(500).json({ error: "Error uploading file", detail: error.message });
  }
}
