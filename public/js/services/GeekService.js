angular.module('GeekService', []).factory('Geek', ['$http', function($http) {
  return {
    // Get all portfolios
    get : function() {
      return $http.get('/api/portfolios');
    },

    // Post AND create a new portfolio
    create : function(portfolioData) {
      return $http.post('/api/portfolios', portfolioData);
    },

    // call to DELETE a portfolio
    delete : function(id) {
       return $http.delete('/api/portfolios/' + id);
    },

    
  }
}]);
