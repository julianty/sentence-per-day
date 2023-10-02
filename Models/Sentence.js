const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sentenceSchema = new Schema({
  tatoeba_id: Number,
  text: String,
  lang: String,
  translations: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
});

module.exports = mongoose.model("Sentence", sentenceSchema, "Sentences");
