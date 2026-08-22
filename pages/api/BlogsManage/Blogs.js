const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";

const getAllBlog = async (code, limit) => {
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/BlogsManage");
    const GetReviews = await pool.request().query(sqlQueries.GetallBlog);
    let result = GetReviews.recordset || [];

    const normalizedCode = String(code || "").trim().toUpperCase();
    if (normalizedCode) {
      result = result.filter((blog) => {
        const shortCode = String(blog.ShortCode || "").trim().toUpperCase();
        return shortCode === normalizedCode;
      });
    }

    if (Number(limit) > 0) {
      result = result.slice(0, Number(limit));
    }

    return result;
  } catch (err) {
    console.error("SQL error", err);
    return [];
  }
};

const GetOneBlog = async (req, res) => {
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/BlogsManage");
    const GetOneData = await pool
      .request()
      .input("BlogID", sql.BigInt, req.body.BlogID)
      .query(sqlQueries.GetoneBlog);
    console.log("Reviews Fetched: ", GetOneData.recordset);
    return GetOneData.recordset;
  } catch (err) {
    console.error("SQL error", err);
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    const code = String(req.query.code || req.query.productCode || "").trim();
    const limit = Number(req.query.limit || 0);
    const data = await getAllBlog(code, limit);
    return res.status(200).json(data);
  }
  if (req.method === "POST") {
    const data = await GetOneBlog(req, res);
    return res.status(200).json(data);
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
