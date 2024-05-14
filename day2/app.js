const express = require("express");

const app = express();
app.listen(3000);

app.get("/", (req, res) => {
  res.send("<p>biganigga</p>"); // Use quotes to send HTML as a string
});
