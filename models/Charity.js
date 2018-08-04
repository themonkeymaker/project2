const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// initialize the schema with a configuration object
const Charity = new Schema({
  // name, description and image src are our properties
  name: String,
  description: String,
  imageURL: String,
  donations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Donation"
      // charity ref potentialy many donations. In this case it's called Donation
    }
  ]
});

module.exports = mongoose.model("Charity", Charity);
