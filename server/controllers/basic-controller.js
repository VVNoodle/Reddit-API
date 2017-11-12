const basicController = {};

basicController.get = (req, res) => {
  res.send({
    message: "Welcome to the Reddit API"
  });
};

module.exports = {
  basicController
};
