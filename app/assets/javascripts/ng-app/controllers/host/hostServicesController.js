angular.module('BeConve')
    .controller('hostServicesController', ['$scope', '$location', '$window', 'Auth', 'Technician', '$http',
        function($scope, $location, $window, Auth, Technician, $http) {

        Auth.currentUser().then(function(user) {

            var tech = Technician.get({ id: user.id }, function() {

                $scope.status = tech.response.status;

                if($scope.status  == 'online'){
                    $scope.info = 'You are now online';
                    $scope.show = true;
                }else{
                    $scope.info = 'You are now offline';
                    $scope.show = false;
                }
            });

            $scope.servicesControl = function(arg) {
                tech.user = {};

                if(arg === 'online'){
                    tech.user.status = 'online';
                    tech.$update({id: Auth._currentUser.id}, function(res){
                        if(res.status === 'success'){
                            $scope.info = 'You are now online';
                            $scope.show = true;
                            $location.path('/host_services')
                        }else{
                            $scope.info = 'Something went wrong. Please try again'
                        }
                    })
                }else{
                    tech.user.status = 'offline';
                    tech.$update({id: Auth._currentUser.id}, function(res){
                        if(res.status === 'success'){
                            $scope.info = 'You are now offline';
                            $scope.show = false;
                            $location.path('/host_services')
                        }else{
                            $scope.info = 'Something went wrong. Please try again'
                        }
                    })
                }
            }
        }, function(error) {
            $location.path('/')
        });

    }]);