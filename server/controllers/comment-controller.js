const db = require("./../models/index");

const commentController = {};

commentController.post = (req, res) => {
  const { text, userId, postId } = req.body;

  // Validation

  const comment = new db.Comment({
    text,
    _creator: userId,
    _post: postId
  });

  comment
    .save()
    .then(newComment => {
      db.Post
        .findByIdAndUpdate(postId, {
          $push: { _comments: newComment._id }
        })
        .then(existingPost => {
          res.status(200).json({
            success: true,
            data: newComment,
            existingPost
          });
        })
        .catch(() => {
          res.status(500).json({
            message: err.toString()
          });
        });
    })
    .catch(err => {
      res.status(500).json({
        message: err.toString()
      });
    });
};

module.exports = {
  commentController
};
