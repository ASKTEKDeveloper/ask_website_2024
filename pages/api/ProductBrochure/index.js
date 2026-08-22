const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";

const getProductBrochureByCode = async (shortCode) => {
  try {
    const normalizedCode = String(shortCode || "").trim();
    if (!normalizedCode) {
      return null;
    }

    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/ProductBrochure");
    const result = await pool
      .request()
      .input("ShortCode", sql.VarChar(50), normalizedCode)
      .query(sqlQueries.GetProductBrochureByCode);

    return (result.recordset && result.recordset[0]) || null;
  } catch (err) {
    console.error("SQL error in ProductBrochure", err);
    return null;
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    const code = String(req.query.code || req.query.productCode || "").trim();
    const product = await getProductBrochureByCode(code);

    if (!product) {
      return res.status(404).json({ message: "No brochure found for this product." });
    }

    return res.status(200).json(product);
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
