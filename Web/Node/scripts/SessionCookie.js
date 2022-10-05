const express = require("express");
const session = require("express-session");

const app = express();

// Session parser
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 },
  })
);

app.get("/test", (req, res) => {
  req.session.number ? req.session.number++ : (req.session.number = 1);
  res.send(`<h1>${req.session.number}</h1>`);
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
