console.log('leaderboard controller')

app.controller('LeaderboardCtrl', function($scope, $http){
  console.log('leaderboard controller')
  $scope.newUserPost = (event) => {
    event.preventDefault()
    console.log('I choose you!')
    console.log('username, email, sweet 16, final 4, champion')
    console.log($scope.name, $scope.email, $scope.sixteen, $scope.four, $scope.champion)
    //$http.get address still needs json at the end which is in firebase
  // $http.post(`https://marchmadnesscapstone.firebaseio.com/.json`)
  // .then(function(response) {
  //   console.log(response)
  //   $scope.data = response.data
  //   console.log($scope.data)
  // })
  }
  // $scope.newUserPost()

  $scope.deletePost = (key) => {
    console.log('delete post')
    //$http.get address still needs json at the end which is in firebase
  $http.delete(`https://marchmadnesscapstone.firebaseio.com/${key}/.json`)
  .then(function(response) {
    $scope.newUserPost()
    console.log(response)
  })
  }
  $http.patch(`https://marchmadnesscapstone.firebaseio.com/${key}/.json`)
     .then(function(response) {
        $scope.newUserPost()
  })
})
