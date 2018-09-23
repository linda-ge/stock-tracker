//AlphaVantage API
var AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;
var redactedKey = 'dummy key';

function initializeAPI(){
  var API_KEY = process.env.ALPHAVANTAGE_API_KEY;
  if (API_KEY) {
    if (API_KEY == redactedKey) {
      console.log('Please set the ALPHAVANTAGE_API_KEY. It is currently ' + redactedKey);
    }
    else {
      console.log('initializing AlphaVantage with API key: ' + API_KEY);
    }
  }
}
