import multer from "multer";
import path from "path";

// const storage = multer.diskStorage({
//   destination: "./public/uploads",
//   filename: (req, file, callback) => {
//     const staticFilename = "uploaded_file"; // Static filename
//     const fileExtension = path.extname(file.originalname);
//     const filename = `${staticFilename}${fileExtension}`;
//     callback(null, filename);
//   },
// });

const storage = multer.diskStorage({
  destination: path.join(process.cwd(), "pages/api", "uploads"),
  filename: (req, file, callback) => {
    const staticFilename = "uploaded_file"; // Static filename
    const fileExtension = path.extname(file.originalname);
    const filename = `${staticFilename}${fileExtension}`;
    callback(null, filename);
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      upload.single("doc1")(req, res, (err) => {
        if (err) {
          console.error("Error handling file upload:", err);
          return res
            .status(500)
            .json({ error: "An unexpected error occurred" });
        }
        const filePath = `/uploads/${req.file.filename}`;
        res.status(200).json({ filePath });
      });
    } catch (error) {
      console.error("Error handling file upload:", error);
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
