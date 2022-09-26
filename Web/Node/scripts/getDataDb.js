const dbConnect = require("./scripts/dbConfig");

const getData = async () => {
  const collection = await dbConnect("BirthdatApp", "friends");
  const data = await collection.find().toArray();
  console.log(data);
};

module.exports = getData;
