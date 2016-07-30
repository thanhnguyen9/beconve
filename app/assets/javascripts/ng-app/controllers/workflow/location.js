angular.module('BeConve')
    .controller('locationController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {


            $scope.next = function(){
                $sessionStorage['location'] = $scope.location;
                $location.url('/device');
            };

        $scope.$watch(angular.bind(this, function () {
            return $scope.location;
        }), function(value) {
            if (angular.isUndefined(value) || value === '') {
                $scope.valid = false;
            } else {
                $scope.valid = true;
            }
        });

    }]);