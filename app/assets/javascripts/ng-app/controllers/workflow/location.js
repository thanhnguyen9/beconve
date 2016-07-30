angular.module('BeConve')
    .controller('locationController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {


            $scope.next = function(){
                if (angular.isUndefined($scope.location) || $scope.location === ''){
                        $scope.alert = true;
                        $location.url('/location');
                }else {
                    $sessionStorage['location'] = $scope.location;
                    $location.url('/device');
                }

            };

        //$scope.$watch(angular.bind(this, function () {
        //    return $scope.location;
        //}), function(value) {
        //    debugger;
        //    if (angular.isUndefined(value) || value === '') {
        //        $scope.valid = false;
        //    } else {
        //        $scope.valid = true;
        //    }
        //});

    }]);