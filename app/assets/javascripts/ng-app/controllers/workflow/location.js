angular.module('BeConve')
    .controller('locationController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {


            $scope.next = function(){
                $sessionStorage['location'] = this.location;
                $location.url('/device');
            }
        }]);