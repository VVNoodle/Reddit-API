const mongoose = require("mongoose");

// title, what data type it is, types, requirements,
// everything that goes into making a collection
const { Schema } = mongoose;

mongoose.Promise = global.Promise; //So that promise isn't deprecated

const voteSchema = new Schema({
  userID: {
    required: true,
    type: String
  },
  postID: {
    required: false
  },
  commendID: {
    required: false
  },
  amount: {
    type: Number
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Vote = mongoose.model("Vote", voteSchema);

module.exports = {
  Vote
};
