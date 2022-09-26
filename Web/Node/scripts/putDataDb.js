const dbConnect = require("./scripts/dbConfig");

const putData = async () => {
  const collection = await dbConnect("BirthdatApp", "friends");
  const data = await collection.insertMany([
    {
      name: "Dave",
      DOB: "1993-09-08",
      gender: "Male",
    },
    {
      name: "Don",
      DOB: "1990-11-17",
    },
  ]);
  if (data.acknowledged) {
    console.log("Data inserted Successfully");
  }
};

putData();
// getData();
