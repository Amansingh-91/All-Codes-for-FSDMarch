const express = require("express");
const products = require("./scripts/data");

const app = express();

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);

  const foundSimilarProducts = products.filter((product) =>
    product.fields.name.startsWith(req.query.name)
  );
  if (foundSimilarProducts.length === 0) {
    return res.json(products);
  }
  res.json(foundSimilarProducts);
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
