import { getProductBrochureFileUrl } from "../../lib/productBrochureApi";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const brochureFileName = String(req.query.BrochureFileName || "").trim();
  if (!brochureFileName) {
    return res.status(400).json({ message: "Brochure file name is required." });
  }

  const adminFileUrl = getProductBrochureFileUrl(brochureFileName);
  if (!adminFileUrl) {
    return res.status(404).json({ message: "Invalid brochure file path." });
  }

  try {
    const response = await fetch(adminFileUrl);
    if (!response.ok) {
      console.error("Admin brochure API returned:", response.status, adminFileUrl);
      return res.status(404).json({ message: "Brochure file is not available." });
    }

    const fileBuffer = await response.arrayBuffer();
    res.setHeader("Content-Type", response.headers.get("Content-Type") || "application/pdf");
    res.setHeader("Content-Length", String(fileBuffer.byteLength));
    res.setHeader("Content-Disposition", "attachment; filename=brochure.pdf");
    return res.status(200).send(Buffer.from(fileBuffer));
  } catch (error) {
    console.error("Error fetching brochure from admin API:", error);
    return res.status(500).json({ message: "Unable to download brochure right now." });
  }
}
