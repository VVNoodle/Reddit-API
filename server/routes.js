const express = require("express");

const { basicController } = require("./controllers/basic-controller");
const { userController } = require("./controllers/user-controller");
const { postController } = require("./controllers/post-controller");
const { commentController } = require("./controllers/comment-controller");
const { voteController } = require("./controllers/vote-controller");

const routes = express();

// Basic Routes
routes.get("/", basicController.get);

// User Routes
routes.post("/signup", userController.post);

// Post Routes
routes.post("/post", postController.post);
routes.get("/posts", postController.getAll);

// Comment Routes
routes.post("/comment", commentController.post);

module.exports = {
  routes
};
