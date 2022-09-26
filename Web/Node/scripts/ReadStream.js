const { createReadStream } = require("fs");
const { createServer } = require("http");

const stream = createReadStream("./text-files/file4.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

const server = createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  stream.on("data", (result) => {
    res.write(result);
    res.end();
  });
});
server.listen(3000);
