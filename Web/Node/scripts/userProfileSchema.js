const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});
const Profile = mongoose.model("Profile", userProfileSchema);
module.exports = Profile;
