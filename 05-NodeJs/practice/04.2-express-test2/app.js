//WAY 1
const express = require("express");
const app = express();

//WAY 2
// const app = require("express")(); // Immediatley Invoked

// app.get
// GET => READ Data
app.get("/", (req, res) => {
  // 
  console.log(__dirname);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

// app.post
// POST => INSERT Data

// app.put
// PUT => UPDATE Data

// app.delete
// DELETE => DELETE Data

// app.all
// app.use
// app.listen
app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
