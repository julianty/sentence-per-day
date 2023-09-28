const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  sentence_id: { type: String },
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.Model("Answer", AnswerSchema);
