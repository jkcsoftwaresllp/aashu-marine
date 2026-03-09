import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Create a MySQL connection
const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});


// Test the connection
console.log("✅ MySQL Database Connected Successfully")

export default db;