const mongoose = require("mongoose");

// title, what data type it is, types, requirements,
// everything that goes into making a collection
const { Schema } = mongoose;

mongoose.Promise = global.Promise; //So that promise isn't deprecated

const commentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
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
  _post: {
    type: Schema.ObjectId,
    ref: "Post"
  }
});

var autoPopulateCreator = function(next) {
  //use function instead of arrow so that this isn't window, and instead commentSchmea
  this.populate({
    path: "_creator",
    select: "username createdAt -_id"
  });
  next();
};

// Middleware hooks
commentSchema.pre("find", autoPopulateCreator); // Pre (before) find method runs, autopopulate the comments

const Comment = mongoose.model("Comment", commentSchema);

module.exports = {
  Comment
};
