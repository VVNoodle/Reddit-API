const db = require("./../models/index");

const postController = {};

postController.post = (req, res) => {
  const {
    title,
    text,
    link,
    userId //we'll not be passing userId
  } = req.body;

  // Validation (either text or link or both)

  const post = new db.Post({
    title,
    text,
    link,
    _creator: userId
  });

  post
    .save()
    .then(newPost => {
      res.status(200).json({
        success: true,
        data: newPost
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.toString()
      });
    });
};

// Shows all posts
postController.getAll = (req, res) => {
  db.Post
    .find({})
    .populate({
      path: "_creator", // looks at the _creator value, type, convert value to type, and searches it in User Schema
      select: "username createdAt -_id" //only pass in username not PASSWORD too lmao. removes _id, don't really need to show it
    })
    .populate({
      path: "_comments",
      select: "username createdAt -_id",
      match: {
        isDeleted: false
      }
    })
    .then(all => {
      return res.status(200).json({
        success: true,
        data: all
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.toString()
      });
    });
};

module.exports = {
  postController
};
