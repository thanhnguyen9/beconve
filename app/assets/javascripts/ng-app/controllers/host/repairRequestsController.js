angular.module('BeConve')
    .controller('repairRequestsController', ['$scope', '$location', 'Auth', 'Technician', '$http',
        function($scope, $location, Auth, Technician, $http) {

        Auth.currentUser().then(function(user) {

            $http({
                method: 'GET',
                url: '/api/v1/repair_requests/requests'
            }).then(function successCallback(response) {
                $scope.order = response.data[0];
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

            $scope.actionOnRequest = function(action){
                if(action === 'approved'){
                    $http({
                        method: 'PUT',
                        url: '/api/v1/repair_requests/approve_request'
                    }).then(function successCallback(response) {
                      if(response.data.response === 'success'){
                          $scope.info_message = 'You have successfully approved the request';
                          $location.path('/complete_request')
                      }
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
                }else{
                    $http({
                        method: 'PUT',
                        url: '/api/v1/repair_requests/decline_request'
                    }).then(function successCallback(response) {
                        if(response.data.response === 'success'){
                            $scope.info_message = 'You have successfully declined the request';
                        }
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
                }
            }

        }, function(error) {
            $location.path('/')
        });

    }]);