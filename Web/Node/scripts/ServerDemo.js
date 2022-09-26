const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //   res.aman();
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello Friends</h1>");
  } else if (req.url == "/About") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>about page</h1>");
  } else if (req.url == "/Home") {
    res.setHeader("Content-Type", "text/html");
    const data = fs.readFileSync("./index.html", "utf-8");
    res.end(data);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");

    res.end("page not Found");
  }
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
