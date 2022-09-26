import { readFile, readFileSync, writeFile, writeFileSync } from "fs";

// readFile("./file1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
const a = readFileSync("./file1.txt", "utf-8");
console.log(a);
console.log("done reading");

writeFile("./file2.txt", "In new", () => {
  console.log("done writing");
});

writeFileSync("./file3.txt", "in third file");
