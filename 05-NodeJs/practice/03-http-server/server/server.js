import http from "node:http";

const server = http.createServer((req, res) => {
  res.end("hi from server");
});

server.listen(4545, () => {
  console.log("server listening on port 4545");
});
