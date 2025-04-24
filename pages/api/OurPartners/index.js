const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";

const getAllPartner = async () => {
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/OurPartners");
    const GetReviews = await pool.request().query(sqlQueries.GetAllPartner);
    return GetReviews.recordset;
  } catch (err) {
    console.error("SQL error", err);
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await getAllPartner();
    res.status(200).json(data);
  }
}
