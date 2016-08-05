angular.module('BeConve')
    .controller('deviceController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {

        $scope.deviceNames = [
            {
                name: 'Iphone'
            }, {
                name: 'Ipad'
            }, {
                name: 'Samsung'
            }
        ];

        $scope.devicePick = function(device){
            $sessionStorage['device'] = device;
            $location.path('/model');
        };




    }]);
