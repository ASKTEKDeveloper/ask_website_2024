// /pages/api/client-logo.js

export default async function handler(req, res) {
  const { logoFileName } = req.query;
  console.log("Received logoFileName:", logoFileName);

  if (!logoFileName) {
    return res.status(400).json({ message: "Logo file name is required" });
  }

  try {
    const externalUrl = `http://vc.asktek.net/ASK_WEB_ADMIN_PANEL_API/api/ClientLogos/${logoFileName}`;
    // const externalUrl = `http://localhost:1311/api/ClientLogos/${logoFileName}`;
    console.log("Fetching image from:", externalUrl);

    const response = await fetch(externalUrl);

    if (!response.ok) {
      console.log("Failed to fetch image. Status:", response.status);
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    const contentType = response.headers.get("Content-Type");
    res.setHeader("Content-Type", contentType);

    // Use arrayBuffer() for binary data
    const imageBuffer = await response.arrayBuffer();
    res.status(200).send(Buffer.from(imageBuffer));
  } catch (error) {
    console.error("Error in API route:", error.message);
    res.status(500).json({ message: "Error fetching image" });
  }
}
