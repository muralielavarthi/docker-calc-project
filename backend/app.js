const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "calcdb",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  const result = Number(num1) + Number(num2);

  const query = "INSERT INTO results (num1, num2, result) VALUES (?, ?, ?)";
  db.query(query, [num1, num2, result]);

  res.json({ result });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
