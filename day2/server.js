const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Set the response header using res.setHeader
  res.setHeader("Content-Type", "text/html");
  res.write("<p>big sleepy 223</p>");
  res.end(); // Ensure you end the response
});

server.listen(3000, "localhost", () => {
  console.log("listening to request on port 3000");
});
