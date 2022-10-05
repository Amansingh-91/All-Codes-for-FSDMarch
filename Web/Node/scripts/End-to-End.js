const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// conneting to db
// import mongoose
const mongoose = require("mongoose");
const User = require("./model/userSchem")(mongoose);

mongoose.connect("mongodb://localhost:27017/UserDb", () => {
  console.log("connected to db");
});

const app = express();

//form parser
app.use(express.urlencoded({ extended: false }));

//cookie parser
app.use(cookieParser());

// session creation

app.use(
  session({
    key: "user_sid",
    secret: "uncle jhon",
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false,
      maxAge: 18000,
    },
  })
);

//middleware

app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});

// session checking middleware
const sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    console.log("if of session cecker");
    return res.redirect("/dashboard");
  }
  console.log("in of session cecker");
  next();
};

app.get("/", sessionChecker, (req, res) => {
  res.redirect("/login");
});

app.get("/login", sessionChecker, (req, res) => {
  res.sendFile(__dirname + "/public-login/login.html");
});

app.get("/dashboard", (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    return res.sendFile(__dirname + "/public-login/dashboard.html");
  }
  res.redirect("/login");
});

app.get("/logout", (req, res) => {
  res.clearCookie("user_sid");
  res.redirect("/login");
});

app.get("/signup", sessionChecker, (req, res) => {
  res.sendFile(__dirname + "/public-login/signup.html");
});

app.post("/login", async (req, res) => {
  const userName = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({ userName, password });
  if (user) {
    req.session.user = user;
    return res.redirect("/dashboard");
  }
  res.redirect("/login");
});

app.post("/signup", (req, res, next) => {
  const user = User.create({
    userName: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  user
    .then((data) => {
      if (data) {
        return res.redirect("/login");
      }
    })
    .catch(next);
});

// error handeling
app.use((err, req, res, next) => {
  if (err) {
    console.log("ther is some error", err);
    res.redirect(req.url);
  }
  next();
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
