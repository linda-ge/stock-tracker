// grab the mongoose module
var stockSchema = require("./Stocks").stockSchema;
var mongoose = require('mongoose');

var PortfolioSchema = new mongoose.Schema({
  username: {type: String,
            required: true},
  name: {type: String, required: true},
  stocks: [stockSchema],
  //{collection: 'Portfolio'}
});


// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model(
  'Portfolios', PortfolioSchema
);
