const dbConnect = require("./scripts/dbConfig");

const updateData = async () => {
  const collection = await dbConnect("BirthdatApp", "friends");
  const data = await collection.updateOne(
    { name: "Sam" },
    { $set: { name: "Uncle John", lang: "english" } }
  );
  console.log(data);
};
updateData();
