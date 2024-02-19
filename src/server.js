const express = require('express')
const path=require('path')
require('dotenv').config();
const app = express()
const webRouter=require('./routes/web')
const connection=require('./config/database')
const configViewEngine=require('./config/viewEngine')
const port = process.env.PORT || 8888;
const hostname= process.env.HOST_NAME;
app.use(express.json());
app.use(express.urlencoded({extend: true }));
const router = express.Router();
console.log(process.env.DB_HOST)
connection.query('SELECT * FROM Users',
function(err, results,fields){
  // console.log(">>>results-",results);
  // console.log(">>>fields=",fields);
})
configViewEngine(app);
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/',webRouter)

