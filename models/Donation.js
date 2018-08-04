const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// initialize the schema with a configuration object
const Donation = new Schema({
  // amount, and charity src are our properties
  amount: Number,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  charity: {
    type: Schema.Types.ObjectId,
    ref: "Charity"
    // donations ref a charity.
  }
});

module.exports = mongoose.model("Donation", Donation);
