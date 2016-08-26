angular.module('BeConve')
    .controller('homeController', ['$scope', '$location', 'Auth', '$sessionStorage',
        function($scope, $location, Auth, $sessionStorage) {

        //$scope.startProcess = function(){
        //    $location.path('/location');
        //}

        $scope.next = function(){
            if (angular.isUndefined($scope.location) || $scope.location === ''){
                $scope.alert = true;
            }else {
                $sessionStorage['location'] = $scope.location;
                $location.url('/device');
            }

        };
    }]);