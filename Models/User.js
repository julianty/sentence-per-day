const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  answers: { type: Schema.Types.ObjectId, ref: "Answer" },
});

module.exports = mongoose.model("User", UserSchema, "Users");
