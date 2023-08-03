const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "must have a type"],
    enum: {
      values: ["income", "expense"],
      message: "either income or expense only",
    },
  },
  icon: {
    type: String,
    required: [true, "must have an icon"],
  },
  name: {
    type: String,
    required: [true, "must have a name"],
  },
  amount: {
    type: Number,
    required: [true, "income must have an amount"],
  },
  date: {
    type: String,
    required: [true, "income must have a date"],
  },
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;
