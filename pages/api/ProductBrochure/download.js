const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";
import { getProductBrochureFileUrl } from "../../../lib/productBrochureApi";

const getBrochureForDownload = async (shortCode) => {
  const normalizedCode = String(shortCode || "").trim();
  if (!normalizedCode) return null;

  try {
    const pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/ProductBrochure");
    const result = await pool
      .request()
      .input("ShortCode", sql.VarChar(50), normalizedCode)
      .query(sqlQueries.GetProductBrochureForDownload);

    return result.recordset?.[0] || null;
  } catch (error) {
    console.error("SQL error while finding product brochure:", error);
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const code = String(req.query.code || req.query.productCode || "").trim();
  if (!code) {
    return res.status(400).json({ message: "Product short code is required." });
  }

  try {
    const product = await getBrochureForDownload(code);
    if (!product?.BrochureFileName) {
      return res.status(404).json({ message: "No brochure found for this product." });
    }

    const adminFileUrl = getProductBrochureFileUrl(product.BrochureFileName);
    if (!adminFileUrl) {
      return res.status(404).json({ message: "Invalid brochure file path." });
    }

    const fileResponse = await fetch(adminFileUrl);
    if (!fileResponse.ok) {
      console.error("Admin brochure API returned:", fileResponse.status, adminFileUrl);
      return res.status(404).json({ message: "Brochure file is not available." });
    }

    const fileBuffer = await fileResponse.arrayBuffer();
    res.setHeader("Content-Type", fileResponse.headers.get("Content-Type") || "application/pdf");
    res.setHeader("Content-Length", String(fileBuffer.byteLength));
    res.setHeader("Content-Disposition", `attachment; filename="brochure_${code}.pdf"`);
    return res.status(200).send(Buffer.from(fileBuffer));
  } catch (error) {
    console.error("Error downloading product brochure:", error);
    return res.status(500).json({ message: "Unable to download brochure right now." });
  }
}
