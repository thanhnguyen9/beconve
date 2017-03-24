angular
    .module('BeConve')

    .controller('homeController', ['$scope', '$location', 'Auth', '$sessionStorage',
        function($scope, $location, Auth, $sessionStorage) {

            $scope.states = ['McKinney, Texas', 'Dallas, Texas'];

            $scope.next = function(){
                if (angular.isUndefined($scope.location) || $scope.location === ''){
                    $sessionStorage['location'] = 'McKinney, Texas';
                }else {
                    $sessionStorage['location'] = $scope.selected;
                }
                $location.url('/availability');
            };
        }]);