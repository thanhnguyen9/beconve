angular.module('BeConve')
    .controller('homeController', ['$scope', '$location',  function($scope, $location) {
        $scope.startProcess = function(){
            $location.path('/location');
        }
    }]);