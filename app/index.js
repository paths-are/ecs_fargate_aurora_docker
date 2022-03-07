require("dotenv").config();
const express = require("express");
const mysql = require("mysql");

const app = express();

const useMySqlSelect = (selectSql) => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: process.env.AWS_AURORA_HOST,
      user: process.env.AWS_AURORA_USER,
      port: process.env.AWS_AURORA_PORT,
      password: process.env.AWS_AURORA_PASSWORD,
      database: process.env.AWS_AURORA_DATABASE,
    });

    connection.connect();

    connection.query(selectSql, (err, rows, fields) => {
      if (err) throw err;

      resolve(rows);
    });
    connection.end();
  });
};

app.get("/", async (req, res) => {
  res.send("Hello From ECS Fargate!");
});
app.get("/select-sql", async (req, res) => {
  const sql = "SELECT * from users LIMIT 10;";
  const data = await useMySqlSelect(sql);
  res.send(data);
});

app.listen(8080, () => console.log("This app listening on port 8080"));
