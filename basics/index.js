require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/chai", (req, res) => {
  res.send("<h1>mama chai dedo</h1>");
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
