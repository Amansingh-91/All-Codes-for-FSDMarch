const mongoose = require("mongoose");
const { User } = require("./scripts/userSchema");
const Profile = require("./scripts/userProfileSchema");

mongoose.connect("mongodb://localhost:27017/BirthdatApp", () => {
  console.log("connected to db");
});

const run = async () => {
  // creating user
  // const user = await User.create({
  //   name: "Aman",
  //   age: 26,
  //   email: "abc@xyz.com",
  //   hobbies: ["Cooking", "Bike Riding"],
  //   course: { course_name: "wep dev", duration: 40 },
  // });
  // console.log(user);
  // create Profile
  // const userForProfile = await User.findOne({ name: "Aman" });
  // const profile = await Profile.create({
  //   userName: "Aman.Singh91",
  //   password: "abc123",
  //   userId: userForProfile._id,
  // });
  // const profile = await Profile.findOne({ userName: "Aman.Singh91" });
  // userForProfile.profileId = profile._id;
  // userForProfile.save();
  // console.log(await profile.populate("userId"));
  // console.log(await userForProfile.populate("profileId"));
};
run();
