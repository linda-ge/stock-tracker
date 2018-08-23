var fs = require('fs');
var parse = require('csv').parse;
var db = require('./models/Stocks.js');

var stockCSVPath = './S&P500.csv';

//read in S&P500 CSV file
function readCSV(filePath, cb){
  fs.readFile(filepath, function (err, data) {
    if (err) {
        return cb(err);
      }
      return cb(null, data);
  });
};

//parse CSV
function parseCSV(data, cb){
  parse(data, function(err, parsedData) {
    if (err) {
        return cb(err);
    }
    return cb(null, parsedData);
  });
};

//creates objects for each S&P500 stock and saves to the database db.
function saveStocks(data, cb){
  stocks = new db.Stocks(data);
  stocks.save(function (err) {
      if (err) {
        return callback(err);
      }
      return callback(null,data);
    });
  // var q?
  for (var i = 1; i < data.length; i+=1) {
    createStockObj(data[i]);
  }
};

//save database
function createStockObj(row){
  var stockObj = {
                ticker: row[0],
                name: row[1],
                sector = row[2],
  }
  return stockObj;
};
