const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// parse cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("<h1>Hello Cookies</h1>");
});

// set cookies on client side
app.get("/set-cookie", (req, res) => {
  // res.setHeader("set-cookie", "name=Jim");

  res.cookie("last-name", "Saini");

  res.send("<h1>Cookies are now set</h1>");
});

// get cookies on server side
app.get("/get-cookie", (req, res) => {
  console.log(req.cookies);

  res.send("<h1>Cookies are now sent to server</h1>");
});

// delete cookies
app.get("/delete-cookie", (req, res) => {
  res.clearCookie("last-name");

  res.send("<h1>Cookies are now deleted</h1>");
});

// set cookies on client side with options
app.get("/set-cookie/option", (req, res) => {
  res.cookie("last-name", "Saini", {
    maxAge: 30000,
    httpOnly: true,
  });

  res.send("<h1>Cookies are now set</h1>");
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
