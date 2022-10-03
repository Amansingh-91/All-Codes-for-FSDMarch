const express = require("express");

const app = express();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});
app.get("/About", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});
app.get("/Contact", (req, res) => {
  res.status(200).send("<h1>Contact Page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>ErrorPage</h1>");
});

app.listen(3000, () => {
  console.log("serving at port 3000");
});
