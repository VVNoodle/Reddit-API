const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { routes } = require("./routes");

mongoose.connect("mongodb://localhost:27017/Reddit", () => {
  console.log("Connected to MongoDB...");
});

const app = express();

// Middlware
app.use(bodyParser.json()); //Parses any json that comes in

app.use("/api", routes);

module.exports = {
  app
};
