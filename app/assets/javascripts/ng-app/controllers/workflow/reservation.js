angular.module('BeConve')
    .controller('reservationController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {
        $scope.location = $sessionStorage.location;
        $scope.device = $sessionStorage.device;
        $scope.model = $sessionStorage.model;
        $scope.color = $sessionStorage.color;
        $scope.price = $sessionStorage.price;
        $scope.warranty = $sessionStorage.warranty;

    }]);