const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";

const getBlogsByProductCode = async (shortCode) => {
  try {
    const normalizedCode = String(shortCode || "").trim();
    if (!normalizedCode) {
      return [];
    }

    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/BlogsManage");
    const result = await pool
      .request()
      .input("ShortCode", sql.VarChar(50), normalizedCode)
      .query(sqlQueries.GetBlogsByProductCode);

    return result.recordset || [];
  } catch (err) {
    console.error("SQL error in BlogsByProductCode", err);
    return [];
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    const code = String(req.query.code || req.query.productCode || "").trim();
    const data = await getBlogsByProductCode(code);
    return res.status(200).json(data);
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
