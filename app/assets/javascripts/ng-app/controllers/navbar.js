angular.module('BeConve')
    .controller('navbarController', ['$scope', '$location', 'Auth', function($scope, $location) {


        $scope.submit = function(){
            $location.path('/');
        }
    }]);