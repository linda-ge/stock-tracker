//public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

  //home page
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainController'
  })

  .when('/nerds', {
    templateUrl: 'views/nerd.html',
    controller: 'NerdController'
  })

  .when('/geeks', {
    templateUrl: 'views/geek.html',
    controller: 'GeekController'
  })

  .when('/portfolio/:id', {
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioEditController'
  });
  //make a form
  //.when('/nerds/:id')

  $locationProvider.html5Mode(true);
}]);
