angular.module('BeConve')
    .controller('hostServicesController', ['$scope', '$location', '$window', 'Auth', 'Technician', '$http',
        function($scope, $location, $window, Auth, Technician, $http) {

        Auth.currentUser().then(function(user) {

            $scope.technician = Auth._currentUser;

            Technician.get({ id: $scope.technician.id }, function(res) {

                if(res.response.status == 'online'){
                    $scope.info = 'You are now online';
                    $scope.show = true;
                }else{
                    $scope.info = 'You are now offline';
                    $scope.show = false;
                }
            });

            $scope.servicesControl = function(arg) {
                if(arg === 'on'){
                    Technician.update({id: $scope.technician.id}, $scope.technician, function() {
                        $scope.info = 'You are now online';
                        $scope.show = true;
                        $location.path('/host_services')
                    })
                }else{
                    Technician.update({id: $scope.technician.id}, $scope.technician, function() {
                        $scope.info = 'You are now offline';
                        $scope.show = false;
                        $location.path('/host_services')
                    })
                }
            }
        }, function(error) {
            $location.path('/')
        });

    }]);