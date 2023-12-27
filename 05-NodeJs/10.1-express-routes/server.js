const express = require("express");
const app = express();

// GET
app.get("/numbers", (req, res)=>{
  res.send("success using GET method");
})

// POST
app.post("/numbers", (req, res)=>{
  res.send("success using POST method")
})

// DELETE
app.delete("/numbers", (req, res)=>{
  res.send("success using DELETE method")
})

// PUT
app.put("/numbers", (req, res)=>{
  res.send("success using PUT method")
})

app.listen(3030, () => {
  console.log("Server is listening on port 3030...");
});