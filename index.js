const express = require("express");
const app = express();
app.use(express.json());
const mysql = require("mysql");

app.post("/api/contacts", (req, res) => {
  let connection = mysql.createConnection({
    host: "db4free.net",
    user: "olesya_pas",
    password: "12061980",
    database: "testtask",
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
