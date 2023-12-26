import http from "node:http";
import { readFileSync } from "node:fs";

// Create server
const server = http.createServer((req, res) => {
  // Extract url and method
  const { url, method } = req;
  console.log("url", url);
  console.log("method", method);

  // 
  if(method === "GET"){
    switch (url) {
      case "/raw-html":
        const rawHTML = "<h1>Welcome</h1>";
        res.end(rawHTML);
        return;
      case "/":
        const indexHTMLFile = readFileSync("./../src/index.html", "utf-8");
        res.end(indexHTMLFile);
        return;
      case "/index.css":
        const cssFile = readFileSync("./../src/index.css", "utf-8");
        res.end(cssFile);
        return;
      case "/users":
        const jsonFile = readFileSync("./../src/users.json", "utf-8");
        res.end(jsonFile);
        return;
    }
  }

});

server.listen(3000, () => {
  console.log("Server listenin on port 3000");
});
