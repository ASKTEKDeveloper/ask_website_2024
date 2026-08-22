const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";

const InsertContactUsReq = async (DataValues) => {
  console.log("DataValues in api", DataValues);
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/Contact");
    const insertEnquiry = await pool
      .request()
      .input("UserName", sql.VarChar(50), DataValues.name)
      .input("PhoneNumber", sql.VarChar(20), DataValues.phone_number)
      .input("Email", sql.VarChar(50), DataValues.email)
      .input("MsgSubject", sql.VarChar(50), DataValues.subject)
      .input("Msg", sql.VarChar(sql.MAX), DataValues.message)
      .query(sqlQueries.InsertContactUsReq);
    return insertEnquiry.recordset;
  } catch (error) {
    return error.message;
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = await InsertContactUsReq(req.body);
    res.status(200).json(data);
  }
}
