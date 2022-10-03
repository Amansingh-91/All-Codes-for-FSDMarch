const express = require("express");
const products = require("./scripts/data");

const app = express();

// req  => middleware => res
// user defined, inbuilt,external
const logIt = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = Date.now();
  console.log(method, url, time);
  next();
};

const Authorizer = (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    return res.status(401).send("not authorized");
  }
  req.name = name;
  next();
};

// app.use([(logIt, Authorizer)]);

app.use("/about", Authorizer);

app.get("/", logIt, (req, res) => {
  res.send("home page");
});
app.get("/about", (req, res) => {
  console.log(req.name);
  res.send("about page");
});
app.get("/about/people", (req, res) => {
  console.log(req.name);
  res.send("about people page");
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
