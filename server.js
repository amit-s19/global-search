const express = require('express');
const fileUpload = require('express-fileupload');
const Pool = require("pg").Pool;
const cors = require('cors');
const app = express();

app.use(fileUpload());
app.use(cors());

app.post('/getData', (req, res) => {
  const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "postgres",
    password: "satan",
    port: 5432
  });

  pool.query(`SELECT * FROM DASHBOARD`, (err, results) => {
    if(err) {
      console.log('error')
    }
    res.send({data: results.rows[0]});
  })
});

app.listen(5001, () => console.log('Server Started...'));