const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";

const InsertProductEnquiry = async (Enquirydata) => {
  console.log("Enquirydata in api", Enquirydata);
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/Enquiry");
    const insertEnquiry = await pool
      .request()
      .input("UserName", sql.VarChar(50), Enquirydata.name)
      .input("PhoneNumber", sql.VarChar(20), Enquirydata.phone_number)
      .input("Email", sql.VarChar(50), Enquirydata.email)
      .input("City", sql.VarChar(50), Enquirydata.city)
      .input("Country", sql.VarChar(100), Enquirydata.country.label)
      .input("CompanyName", sql.VarChar(100), Enquirydata.company_name || "")
      .input("Product", sql.VarChar(20), Enquirydata.product)
      .input("TypeOfReq", sql.Char(1), Enquirydata.TypeOfReq)
      .input("Remarks", sql.VarChar(sql.MAX), Enquirydata.enquiry_details)
      .query(sqlQueries.InsertProductEnquiry);
    return insertEnquiry.recordset;
  } catch (error) {
    return error.message;
  }
};

const Getusers = async () => {
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/Enquiry");
    const getallusers = await pool.request().query(sqlQueries.Getalluser);
    return getallusers.recordset;
  } catch (err) {
    console.error("SQL error", err);
  }
};

const Getoneuser = async (req, res) => {
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/Enquiry");
    const LoginUser = await pool
      .request()
      .input("User_Id", sql.VarChar(50), req.body.User_Id)
      .query(sqlQueries.Getoneuser);
    return LoginUser.recordset;
  } catch (err) {
    console.error("SQL error", err);
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await Getusers();
    res.status(200).json(data);
  }
  if (req.method === "POST") {
    const data = await InsertProductEnquiry(req.body);
    res.status(200).json(data);
  }
}
