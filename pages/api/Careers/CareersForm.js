const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";

const InsertJobApplies = async (DataValue) => {
  console.log("DataValue in api", DataValue);
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/Careers");
    const insertEnquiry = await pool
      .request()
      .input("UserName", sql.VarChar(50), DataValue.name)
      .input("PhoneNumber", sql.VarChar(20), DataValue.phone_number)
      .input("Email", sql.VarChar(50), DataValue.email)
      .input("Gender", sql.Char(1), DataValue.gender)
      .input("Attachment", sql.VarChar(2000), DataValue.resume)
      .input("Experience", sql.VarChar(20), DataValue.years_of_experience)
      .query(sqlQueries.InsertJobApplies);
    return insertEnquiry.recordset;
  } catch (error) {
    return error.message;
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = await InsertJobApplies(req.body);
    res.status(200).json(data);
  }
}
