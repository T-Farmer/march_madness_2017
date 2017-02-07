console.log("main.js is loaded")

const app = angular.module(`bracketsApp`, [`ngRoute`])

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix(``);


// Initialize Firebase here later

// Routing

$routeProvider
  .when(`/`, {
    controller: "IndexCtrl",
    templateUrl: `index.hmtl`
  })
  .when(`/brackets`, {
    controller: "BracketsCtrl",
    templateUrl: `brackets.html`
  })
  .when(`/home`, {
    controller: "HomeCtrl",
    templateUrl: `homeScreen.html`
  })
  .when(`/leaderboard`, {
    controller: "PoolCtrl",
    templateUrl: `leaderboard.html`
  })
})
