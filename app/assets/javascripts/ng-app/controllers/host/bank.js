angular.module('BeConve')
    .controller('bankController', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {

        $scope.startProcess = function(){
            $location.path('/location');
        }
    }]);