//WAY 1
const express = require("express");
const app = express();

//WAY 2
// const app = require("express")(); // Immediatley Invoked

// app.get
// GET => READ Data
app.get("/", (req, res) => {
  // This works
  // res.send("Home Page");
  // We can also add the status code ourselves
  // Express does this by default for 200 but doing it ourselves gives us more control
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
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
// https://www.youtube.com/watch?v=Oe421EPjeBE