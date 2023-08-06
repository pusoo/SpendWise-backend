const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "must have a type"],
    enum: {
      values: ["income", "expense", "goal"],
      message: "either income or expense only",
    },
  },
  icon: { 
    type: String,
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
  },
  currentAmount: {
    type: Number,
  },
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;