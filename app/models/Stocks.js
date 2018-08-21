var mongoose = require('mongoose');

// define our stocks in portfolio

var stockSchema = new mongoose.Schema({
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

module.exports = {
  stockModel: mongoose.model(
    'Stocks', stockSchema
  ),
  stockSchema: stockSchema,
};
// module.exports allows us to pass this to other files when it is called
