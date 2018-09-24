// public/js/controllers/NerdCtrl.js
//sign up and log in
angular.module('NerdCtrl', [])
.controller('NerdController', ["$http", "$scope", function($http, $scope) {
  $scope.tagline = 'Create an account to get started';
  $http.get("/api/nerds").then(function(res){
      $scope.nerds = res.data;
    });
}]);
