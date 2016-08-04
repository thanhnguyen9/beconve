angular.module('BeConve')
    .controller('navbarController', ['$scope', '$location', 'Auth', function($scope, $location) {


        $scope.goHomeSubmit = function(){
            $location.path('/');
        }
    }]);