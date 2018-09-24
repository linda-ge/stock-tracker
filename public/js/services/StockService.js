angular.module('StockService', []).factory('Stocks', ['$http', function($http) {

    // Get all stocks
    get : function() {
      return $http.get('/api/stocks');
    },

    // Post AND create a new stock
    create : function(stockData) {
      return $http.post('/api/stocks', stockData);
    },

    // call to DELETE a stock
    delete : function(id) {
       return $http.delete('/api/stocks/' + id);
    },

}]);
