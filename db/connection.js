const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/donationcart");

mongoose.Promise = Promise;

module.exports = mongoose;
