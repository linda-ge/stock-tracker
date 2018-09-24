// grab the mongoose module
var PortfolioSchema = require("./Portfolios").PortfolioSchema;
var mongoose = require('mongoose');


// define our nerd model
var NerdSchema = new mongoose.Schema({
  username: String,
  portfolios: [PortfolioSchema],
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model(
  'Nerd', NerdSchema
);
