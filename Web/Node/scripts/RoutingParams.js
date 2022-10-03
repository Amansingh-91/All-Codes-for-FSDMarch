const express = require("express");
const products = require("./scripts/data");
// const mongoose = require("mongoose");
// const { User } = require("./scripts/userSchema");
// const server = mongoose.connect("mongodb://localhost:27017/BirthdatApp", () => {
//   console.log("connected");
// });

// const run = async () => {
//   const user = await User.find();
//   return user;
// };

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/Products/Just/Image", async (req, res) => {
  const justImages = products.map((product) => {
    const { image } = product.fields;
    return { image };
  });
  // const user = await run();
  // res.json(user);
  res.json(justImages);
});
app.get("/Products", async (req, res) => {
  const newProducts = products.map((product) => {
    const { name, price } = product.fields;
    return { name, price, id: product.id };
  });
  // const user = await run();
  // res.json(user);
  res.json(newProducts);
});
app.get("/Products/:productId", async (req, res) => {
  console.log(req);
  console.log(req.params);
  const singleProduct = products.find(
    (product) => product.id === req.params.productId
  );
  // const user = await run();
  // res.json(user);
  res.json(singleProduct);
});
app.get("/Products/:productId/Image/:thumbnail", async (req, res) => {
  console.log(req);
  console.log(req.params);
  const singleProduct = products.find(
    (product) => product.id === req.params.productId
  );
  // const user = await run();
  // res.json(user);
  const imageurl = { url: "" };
  if (singleProduct) {
    if (req.params.thumbnail === "full") {
      imageurl.url = singleProduct.fields.image[0].thumbnails.full.url;
    } else if (req.params.thumbnail === "small") {
      imageurl.url = singleProduct.fields.image[0].thumbnails.small.url;
    } else if (req.params.thumbnail === "large") {
      imageurl.url = singleProduct.fields.image[0].thumbnails.large.url;
    }
  }
  res.json(imageurl);
});
app.listen(3000, () => {
  console.log("listening on port 3000...");
});
