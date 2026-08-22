const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";

const getFaqByProductShortCode = async (shortCode) => {
  try {
    if (!shortCode) {
      return [];
    }

    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/FAQ");
    const result = await pool
      .request()
      .input("ShortCode", sql.VarChar(50), shortCode)
      .query(sqlQueries.GetFAQByProductShortCode);

    return result.recordset || [];
  } catch (err) {
    console.error("SQL error", err);
    return [];
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    const code = String(req.query.code || "").trim();
    const data = await getFaqByProductShortCode(code);
    return res.status(200).json(data);
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
