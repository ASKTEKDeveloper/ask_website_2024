// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";

//GetUser
const Getusers = async () => {
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/User");
    const getallusers = await pool.request().query(sqlQueries.Getalluser);
    return getallusers.recordset;
  } catch (err) {
    console.error("SQL error", err);
  }
};

const Getoneuser = async (req, res) => {
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/User");
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
    const data = await Getoneuser(req, res);
    res.status(200).json(data);
  }
}
