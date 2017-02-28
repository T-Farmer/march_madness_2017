app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');


// Initialize Firebase here later

// Routing

  $routeProvider
    .when('/', {
      // controller: 'HomeCtrl',
      controller: 'BracketsCtrl',
      templateUrl: '/partials/brackets.html',
    })
    .when('/brackets', {
      controller: 'BracketsCtrl',
      templateUrl: '/partials/brackets.html',
    })
    .when('/home', {
      controller: 'HomeCtrl',
      templateUrl: '/partials/home.html',
    })
    .when('/leaderboard', {
      controller: 'LeaderboardCtrl',
      templateUrl: '/partials/leaderboard.html',
    })
    .otherwise({
      redirectTo: ('/')
    })
})
