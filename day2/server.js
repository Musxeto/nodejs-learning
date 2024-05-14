const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Set the response header using res.setHeader
  res.setHeader("Content-Type", "text/html");
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening to request on port 3000");
});
