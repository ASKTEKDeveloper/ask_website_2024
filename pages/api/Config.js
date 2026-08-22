import sql from "mssql";
const {
  PORT,
  HOST,
  HOST_URL,
  SQL_USER,
  SQL_PASSWORD,
  SQL_DATABASE,
  SQL_SERVER,
} = process.env;

export async function connectToDatabase() {
  try {
    // Configure connection
    const config = {
      user: SQL_USER,
      password: SQL_PASSWORD,
      server: SQL_SERVER,
      database: SQL_DATABASE,
      options: {
        encrypt: false, // If you are connecting to Azure SQL Database, set this to true
        trustServerCertificate: false, // If you are connecting to Azure SQL Database, set this to false
      },
    };

    // Connect to database
    let pool = await sql.connect(config);
    // console.log("Connected to MSSQL database");
    return pool;
  } catch (err) {
    console.error("SQL error", err);
  }
}
