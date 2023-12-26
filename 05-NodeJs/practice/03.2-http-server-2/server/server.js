import http from "node:http";

const server = http.createServer((req, res) => {
  
  // handle 2 diff urls, inside one url handle 2 diff methodds.

  // EXTRACT URL AND METHOD (2 ways)
  // Way 1
  const { url, method } = req;
  // Way 2
  // const url = req.url;
  // const method = req.method;

  switch (url) {
    case "/home":
      switch(method){
        case "POST":
          res.end("POST from home");
          return;
        case "GET":
          res.end("GET from home");
          return;
      }
      return;
    case "/about":
      res.end("hi from about");
      return;
    default:
      return;
  }
});

server.listen(4545, () => {
  console.log("server listening on port 4545");
});
