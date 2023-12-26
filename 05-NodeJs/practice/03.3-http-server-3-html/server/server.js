import http from "node:http";
import { readFileSync } from "node:fs";

const server = http.createServer((req, res) => {
  // handle 2 diff urls, inside one url handle 2 diff methodds.

  // EXTRACT URL AND METHOD (2 ways)
  // Way 1
  const { url, method } = req;
  console.log('url', url)
  console.log('method', method)
  // Way 2
  // const url = req.url;
  // const method = req.method;

  switch (url) {
    case "/style.css":
      const cssFile = readFileSync("./../src/style.css", "utf-8")
      console.log(cssFile);
      res.end(cssFile);
      return;
    case "/index.js":
      const jsFile = readFileSync("./../src/index.js", "utf-8");
      res.end(jsFile);
      return;
    case "/home":
      switch (method) {
        case "POST":
          res.end("POST from home");
          return;
        case "GET":
          const homeHttpFile = readFileSync("./../src/index.html", "utf-8");
          res.end(homeHttpFile);
          // res.end("GET from home");
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
