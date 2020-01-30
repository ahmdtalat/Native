const { model, Schema } = require("mongoose");

const todoSchema = new Schema({
  text: String,
  created: String
});

module.exports = model("Todo", todoSchema);
