const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/donationcart");

mongoose.Promise = Promise;

module.exports = mongoose;
