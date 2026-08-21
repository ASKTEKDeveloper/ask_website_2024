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
        res.status(500).json({ error: "Error uploading file" });
        return;
      }

      const file = req.file;

      // Create FormData
      const formData = new FormData();
      formData.append("doc1", file.buffer, { filename: file.originalname });

      // Forward the file to your server API
      const response = await axios.post(
        "http://vc.asktek.net/ASKFileSaveAPI/api/AskFileSave",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Server API response:", response.data);

      // Respond to the client
      res.status(200).json({ message: "File uploaded successfully",path : response.data });
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "Error uploading file" });
  }
}
