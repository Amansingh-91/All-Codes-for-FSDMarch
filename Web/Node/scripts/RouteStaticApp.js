const http = require("http");
const fs = require("fs");
const { readFile, writeFile } = require("fs/promises");

// Reading File using Promise
const getPath = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const getData = async (path) => {
  const data = await readFile(path, "utf8");
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject("no data found");
    }
  });
};
const PutData = async (path, data, append) => {
  await writeFile(path, data, { flag: append ? "a" : "" });
};
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // fs.readFile("./index.html", "utf-8", (err, data) => {
    //   if (err) {
    //     res.end(err);
    //   } else {
    //     res.end(data);
    //   }
    // });
    res.writeHead(200, "OK", { "Content-type": "text/html" });
    // getPath("./index.html")
    //   .then((data) => {
    //     res.end(data);
    //   })
    //   .catch((err) => {
    //     res.end(err);
    //   });
    getData("../index.html")
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err);
      });
  } else if (req.url === "/About") {
    // for (let index = 0; index < 10000; index++) {
    //   console.log(index);
    // }
    getData("../about.html")
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err);
      });
  } else if (req.url === "/Data") {
    // for (let index = 0; index < 10000; index++) {
    //   console.log(index);
    // }
    getData("../text-files/file4.txt")
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err);
      });
  } else {
    res.writeHead(404, "OK", { "Content-type": "text/html" });
    getData("../error.html")
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err);
      });
    // PutData("./text-files/file4.txt", "just testing this method", false);
  }
});
server.listen(3000);
