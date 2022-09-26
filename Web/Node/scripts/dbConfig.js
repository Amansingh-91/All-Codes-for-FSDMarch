const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// client
//   .connect()
//   .then((result) => {
//     return result.db("BirthdatApp");
//   })
//   .then((dbs) => {
//     let collection = dbs.collection("friends");
//     return collection.findOne({ gender: "Male" });
//   })
//   .then((response) => {
//     console.log(response);
//   });

const dbConnect = async (dbName, collectionName) => {
  const result = await client.connect();
  const dbs = await result.db(dbName);

  return dbs.collection(collectionName);
};

module.exports = dbConnect;
