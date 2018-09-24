angular.module('GeekCtrl', [])
.controller('GeekController', ["$http", "$scope", function($http, $scope) {
	$scope.tagline = 'View your portfolios';
	$scope.makePortfolio = function() {
			var newPortfolio = {username: "1bunbun", name: "defaultName"};
        $http.post("api/portfolios", newPortfolio).then(function(res) {
					$scope.portfolios.push(res.data);
				});
    }
	$http.get("api/portfolios").then(function(res){
      $scope.portfolios = res.data;
    });
}]);
