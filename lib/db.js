const sql = require('mssql');

const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  server: process.env.SQL_SERVER,
  encrypt: process.env.SQL_ENCRYPT === 'true', // Convert to boolean
};

async function connectToDatabase() {
  try {
    await sql.connect(config);
    // console.log('Connected to MSSQL database');
    return sql;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

module.exports = { connectToDatabase };
