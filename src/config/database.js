// khai baos bien mysql  từ thư viện mysql2
require('dotenv').config()
const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  }); 
  module.exports=connection; 
  // const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password:'123456',
//   port: 3307,
//   database:'hoidanit',
// });
