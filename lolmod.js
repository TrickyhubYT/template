const mongoose = require("mongoose");
let Schema = new mongoose.Schema({
  Points: Number,
  User: String,
  Username: String,
  Guild: String,
});
module.exports = mongoose.model("Points", Schema);