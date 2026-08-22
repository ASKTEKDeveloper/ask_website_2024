// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";

//GetUser
const getAllReview = async () => {
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/User");
    const GetReviews = await pool.request().query(sqlQueries.getAllReview);
    // console.log("Reviews Fetched: ", GetReviews.recordset);
    return GetReviews.recordset;
  } catch (err) {
    console.error("SQL error", err);
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await getAllReview();
    res.status(200).json(data);
  }
}
