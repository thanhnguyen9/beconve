angular.module('BeConve')
    .controller('homeController', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {

        $scope.startProcess = function(){
            $location.path('/location');
        }
    }]);