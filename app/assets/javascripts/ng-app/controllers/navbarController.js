angular.module('BeConve')
    .controller('navbarController', ['$scope', '$window', 'Auth', function($scope, $window) {


        $scope.goHomeSubmit = function(){
            $window.location.href = '/home.html';
        }
    }]);