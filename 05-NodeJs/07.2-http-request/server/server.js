import http from "node:http";
import axios from "axios";

const server = http.createServer(async (req, res) => {
  const { url, method } = req;

  const fetchData = async () => {
    try {
      const result = await axios.get("https://api.chucknorris.io/jokes/random");
      const filteredData = result.data.value;
      return filteredData;
    } catch (err) {
      console.error(err);
    }
  };

  switch (url) {
    case "/":
      switch (method) {
        case "GET":
          // if this is an object stringify it first
          const output = await fetchData();
          res.end(output);
          return;
      }
      return;
  }
});

server.listen(4040, () => {
  console.log("Server listening on port 4040");
});
