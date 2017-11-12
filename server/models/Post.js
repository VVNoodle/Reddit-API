const mongoose = require("mongoose");

// title, what data type it is, types, requirements,
// everything that goes into making a collection
const { Schema } = mongoose;

mongoose.Promise = global.Promise; //So that promise isn't deprecated

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: String,
  link: String,
  isDeleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  _creator: {
    type: Schema.ObjectId,
    ref: "User" //reference
  },
  _comments: [
    {
      type: Schema.ObjectId,
      ref: "Comment"
    }
  ] //brackets indicates array of comments
});

const Post = mongoose.model("Post", postSchema);

module.exports = {
  Post
};
