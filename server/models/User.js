const mongoose = require("mongoose");

// title, what data type it is, types, requirements,
// everything that goes into making a collection
const { Schema } = mongoose;

mongoose.Promise = global.Promise; //So that promise isn't deprecated

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [4, "Username must be at least 4 characters long"]
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

// write some ecryption for password

const User = mongoose.model("User", userSchema);

module.exports = {
  User
};
