angular.module('BeConve')
    .controller('navbarController', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {

        Auth.currentUser().then(function(user) {
            // User was logged in, or Devise returned
            // previously authenticated session.
            console.log(user); // => {id: 1, ect: '...'}
        }, function(error) {
            // unauthenticated error
            console.log("not auth")
        });

        $scope.startProcess = function(){
            $location.path('/location');
        }
    }]);