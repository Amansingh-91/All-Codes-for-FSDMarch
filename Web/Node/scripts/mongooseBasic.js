const mongoose = require("mongoose");
const userSchema = require("./scripts/userSchema");
const User = require("./scripts/userSchema");
// connecting to Database
mongoose.connect(
  "mongodb://localhost:27017/BirthdatApp",
  () => {
    console.log("connected to db");
  },
  (e) => {
    console.log(e.message);
  }
);

const insertUser = async (user) => {
  return await User.create(user);
};

const run = async () => {
  // const user = new User({ name: "divya", age: 25, gender: "Male" });
  // user.save();
  //   const user = await User.create({ name: "Dharam" });
  //   const user = await insertUser({
  //     name: "Divya",
  //     age: 25,
  //     email: "Divya@xyz.com",
  //     createdAt: Date.now(),
  //     updatedAt: Date.now(),
  //     hobbies: ["Bike Riding", "Singing"],
  //     course: {
  //       course_name: "Frontend Dev",
  //       Duration: 20,
  //     },
  //   });
  try {
    // Find Data or Read Data from Database
    // const user = await User.findOne({ age: 26 });
    // Instance Method in Action
    // const user = await User.findOne({ name: "jatin" });
    // user.greet();
    // static Method in Action
    // const user = await User.findByName("jatin");
    // console.log(user);
    // update data in db for any document
    // user.email = "abc@xyz.com";
    // user.save();

    // Querying
    // const user = await User.find().byName("Jatin").where("age").gt(24);
    // console.log(user);

    // Virtual property in action
    // const user = await User.find().limit(1);
    // console.log(user[0].nameAge);

    // middleWare in action
    const user = await User.findOne().byName("jatin");
    user.name = "Jatin Jain";
    user.age = 30;
    user.save();
  } catch (err) {
    console.log(err.message);
  }
};

run();
