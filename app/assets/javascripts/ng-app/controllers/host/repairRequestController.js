angular.module('BeConve')
    .controller('repairRequestController', ['$scope', '$location', '$window', 'Auth', function($scope, $location, $window, Auth) {

        Auth.currentUser().then(function(user) {
            console.log(Auth._currentUser);
        }, function(error) {
            $location.path('/')
        });

    }]);