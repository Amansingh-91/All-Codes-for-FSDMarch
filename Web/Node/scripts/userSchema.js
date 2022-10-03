const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 100,
    // Custom validator
    // validate: {
    //   validator: (v) => v % 2 === 0,
    //   message: (props) => `${props.value} is not an enven number`,
    // },
  },
  email: {
    type: String,
    // minlength: 15,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  hobbies: [String],
  course: {
    course_name: String,
    duration: Number,
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  // Denormalization method
  // profileDetails: {
  //   userName: {
  //     type: String,
  //     required: true,
  //     unique: true,
  //   },
  //   password: {
  //     type: String,
  //     required: true,
  //   },

  // },

  // normalization
  profileId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Profile",
  },
});

// Instance method
userSchema.methods.greet = function () {
  console.log(`Hello ${this.name}`);
};
// Static method
userSchema.statics.findByName = function (nameToBeFound) {
  return this.find({ name: nameToBeFound });
};

// Query Function
userSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};

// Virtual Property
userSchema.virtual("nameAge").get(function () {
  return `${this.name} <age: ${this.age}>`;
});

// middleware
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  console.log("changed updated Time");
  next();
});
userSchema.post("save", function (doc, next) {
  doc.greet();

  next();
});

const User = mongoose.model("User", userSchema);

exports.User = User;
