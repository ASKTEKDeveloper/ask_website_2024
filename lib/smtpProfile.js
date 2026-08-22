import sql from "mssql";
import { connectToDatabase } from "../pages/api/Config";
import { loadSqlQueries } from "../pages/api/Utill";

export const getSMTPProfile = async (profileCode) => {
  const normalizedCode = String(profileCode || "").trim().toUpperCase();
  if (!normalizedCode) throw new Error("SMTP profile code is required.");

  const pool = await connectToDatabase();
  const queries = await loadSqlQueries("api/Email");
  const result = await pool
    .request()
    .input("ProfileCode", sql.VarChar(20), normalizedCode)
    .query(queries.GetSMTPProfileByCode);

  const profile = result.recordset?.[0];
  if (!profile || !profile.SMTPHost || !profile.SMTPUserName || !profile.SMTPPassword) {
    throw new Error(`Active SMTP profile '${normalizedCode}' was not found or is incomplete.`);
  }

  return profile;
};
