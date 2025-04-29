const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";

const getAllCaseStudy = async () => {
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/CaseStudy");
    const GetReviews = await pool.request().query(sqlQueries.GetAllCaseStudy);
    // console.log("Reviews Fetched: ", GetReviews.recordset);
    return GetReviews.recordset;
  } catch (err) {
    console.error("SQL error", err);
  }
};

const getCaseStudy = async (req, res) => {
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/CaseStudy");
    const GetOneData = await pool
      .request()
      .query(sqlQueries.GetOneCaseStudy);
    return GetOneData.recordset;
  } catch (err) {
    console.error("SQL error", err);
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await getAllCaseStudy();
    res.status(200).json(data);
  }
  if (req.method === "POST") {
    const data = await getCaseStudy(req, res);
    res.status(200).json(data);
  }
}