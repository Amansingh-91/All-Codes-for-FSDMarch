const dbConnect = require("./scripts/dbConfig");

const deleteData = async () => {
  const collection = await dbConnect("BirthdatApp", "friends");
  const data = await collection.deleteMany({ gender: "Male" });
  console.log(data);
};
deleteData();
