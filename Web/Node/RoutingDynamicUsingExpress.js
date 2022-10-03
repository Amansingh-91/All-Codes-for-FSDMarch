const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   // return complete path for file
//   // console.log(path.resolve(__dirname, "./index.html"));
//   res.sendFile(path.resolve(__dirname, "./index.html"));
// });

app.get("/About", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./about.html"));
});

app.all("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./error.html"));
});
app.listen(3000, () => {
  console.log("serving at port 3000");
});
