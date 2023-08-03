const mongoose = require("mongoose");

const savingSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "must have a type"],
    enum: {
      values: ['goal'],
      message: "goal only",
    },
  },
  name: {
    type: String,
    required: [true, "goal must have a name"],
  },
  amount: {
    type: Number,
    required: [true, "goal must have an amount"],
  },
});

const Saving = mongoose.model("Saving", savingSchema);

module.exports = Saving;
