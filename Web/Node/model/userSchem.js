const User = (mongoose) => {
  const userSchema = mongoose.Schema({
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

  const User = mongoose.model("user", userSchema);
  return User;
};

module.exports = User;
