//public/js/services/NerdService.js
angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {
  return {
    // Get all nerds
    get : function() {
      return $http.get('/api/nerds');
    },

    // Post AND create a new nerd
    create : function(nerdData) {
      return $http.post('/api/nerds', nerdData);
    },

    // call to DELETE a nerd
    delete : function(id) {
       return $http.delete('/api/nerds/' + id);
    },
  }
}]);
