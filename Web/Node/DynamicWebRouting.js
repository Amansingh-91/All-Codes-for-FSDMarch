const { createServer } = require("http");
const { readFileSync } = require("fs");
const HomeCss = readFileSync("./home.css", "utf8");
const HomePage = readFileSync("./index.html", "utf8");

const HomeJs = readFileSync("./home.js", "utf8");
const server = createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(HomePage);
  } else if (url === "/About") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
  } else if (url === "/home.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(HomeJs);
  } else if (url === "/home.css") {
    res.writeHead(200, { "content-type": "text/stylesheet" });
    console.log(HomeCss);
    res.write(HomeCss);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Error Page</h1>");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
