// grab the mongoose module
var mongoose = require('mongoose');

// define our stocks in portfolio
var StockSchema = new mongoose.Schema({
  ticker : {type: String,
            required: true},
  name : {type: String,
          required: false},
  shares: {type: Number,
          required: true,
          min: 0},
  //should min be 0? can you short?
  purchasePrice: {type: Number,
                  required: true,
                  min: 0},
  tradeDate: {type: Date,
              required: true},
  currPrice: {type: Number},
  change: {type: Number},
});

var PortfolioSchema = new mongoose.Schema({
  username: {type: String,
            required: true},
  name: {type: String, required: true},
  stocks: [StockSchema],
  //{collection: 'Portfolio'}
});


// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model(
  'Portfolio', PortfolioSchema
);
