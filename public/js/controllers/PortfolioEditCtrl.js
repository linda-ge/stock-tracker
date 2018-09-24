angular.module('PortfolioEditCtrl', [])
.controller('PortfolioEditController', ["$http", "$scope", "$routeParams", function($http, $scope, $routeParams) {
	var apikey = 'YOUR_KEY_HERE';
	// API key removed for privacy
	var queryURL = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=';
	var portfolioId = $routeParams.id;
	$scope.tagline = 'View your holdings';
	$scope.editPortfolio = function() {
			var editPortfolio = {username: "1bunbun", name: "defaultName"};
        $http.put("api/portfolios/" + portfolioId, editPortfolio).then(function(res) {
					$scope.portfolio = res.data;
				});
    }

	$http.get("api/portfolios/" + portfolioId).then(function(res){
      $scope.portfolio = res.data;
			console.log(res.data)
			console.log($scope.portfolio.stocks)
			console.log($scope.portfolio.stocks.length)
			var isDone = null;
			for (var count=0; count<$scope.portfolio.stocks.length; count++) {
				var index = count
				$http.get(queryURL  + $scope.portfolio.stocks[index].ticker + "&apikey=" + apikey).then(function(resp) {
						$scope.portfolio.stocks[index].currPrice = Number(resp.data["Global Quote"]["05. price"]);
						$scope.portfolio.stocks[index].change = $scope.portfolio.stocks[index].currPrice - $scope.portfolio.stocks[index].purchasePrice
					}
				).then(function(res) {
					if (count == $scope.portfolio.stocks.length) {
						var editPortfolio= {stocks:$scope.portfolio.stocks};
						console.log(editPortfolio)
						console.log(portfolioId)
						$http.put("api/portfolios/" + portfolioId, editPortfolio).then(function(res) {
							console.log(res.data)
						});
					}
				}
				)
			}
    });

}]);

// from the API key all I need is:
// Quote Endpoint
// Symbol
// "05.price"
// maximum of dict.keys()...from there, get the close "4. close" key
