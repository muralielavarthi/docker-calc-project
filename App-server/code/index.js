const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*",
  });
  res.end("Hello from backend container!");
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
