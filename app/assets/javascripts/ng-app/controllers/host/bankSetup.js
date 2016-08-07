angular.module('BeConve')
    .controller('bankSetupController', ['$scope', '$location', '$window', 'Auth', function($scope, $location, $window, Auth) {

        Auth.currentUser().then(function(user) {
            console.log(Auth._currentUser);
        }, function(error) {
            $location.path('/')
        });

        $scope.submit = function(){
            $window.location.href = '/home.html';
        };

    }]);