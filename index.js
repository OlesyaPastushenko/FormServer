const express = require("express");
const app = express();
const config = require("config")
app.use(express.json());
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.get("/api/contacts", (req, res) => {
  res.send("Niice");
});
app.post("/api/contacts", (req, res) => {
  let connection = mysql.createConnection({
    host: config.get('host'),
    user: config.get('user'),
    password: config.get('password'),
    database: config.get('database'),
  });
  connection.connect();
  const body = req.body;
  const insertQuery =
    "INSERT INTO `User_messages`(`name`, `email`, `message`, `id`) VALUES (" +
    `'${body.name}','${body.email}','${body.message}','${body.id}')`;
  connection.query(insertQuery, (error) => {
    res.send(error ? error.message : "OK");
  });
  connection.end();
});
app.listen(4000, () => {
  console.log("Server has been started");
});
