app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');


// Initialize Firebase here later

// Routing

  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: '/partials/home.hmtl',
    })
    .when('/brackets', {
      controller: 'BracketsCtrl',
      templateUrl: '/partials/brackets.html',
    })
    .when('/leaderboard', {
      controller: 'LeaderboardCtrl',
      templateUrl: '/partials/leaderboard.html',
    })
    .otherwise({
      redirectTo: ('/')
    })
})
