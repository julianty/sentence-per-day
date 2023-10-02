const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  sentence_id: { type: Number },
  text: { type: String },
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  lang: { type: String },
});

module.exports = mongoose.model("Answer", AnswerSchema, "Answers");
