angular
    .module('BeConve')

    .controller('homeController', ['$scope', '$location', '$sessionStorage', 'AvailableCities',
        function($scope, $location, $sessionStorage, AvailableCities) {

            AvailableCities.query({}, function(res){

                if(res.status === 'success'){
                    $scope.cities = res.response;
                }else{
                    $scope.error = 'Something went wrong. Please refresh the page'
                }
            });

            $scope.next = function(){
                if (angular.isUndefined($scope.selected) || $scope.selected === ''){
                    $sessionStorage['location'] = 'McKinney, Texas';
                    $sessionStorage['longitude'] = -96.6398;
                    $sessionStorage['latitude'] = 33.1972;
                }else {
                    $sessionStorage['location'] = $scope.selected.name;
                    $sessionStorage['longitude'] = $scope.selected.longitude;
                    $sessionStorage['latitude'] = $scope.selected.latitude;
                }

                $location.url('/availability');
            };
        }]);

