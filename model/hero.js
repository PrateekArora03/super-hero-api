const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const heroSchema = new Schema({
  name: String,
  photo: String,
  hiddenIdentity: String, //if Array but it like [String] or Array
  power: Array
});

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;
