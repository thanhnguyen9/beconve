angular.module('BeConve')
    .controller('completeRequestController', ['$scope', '$location', 'Auth', 'Technician', '$http',
        function($scope, $location, Auth, Technician, $http) {

            Auth.currentUser().then(function(user) {
                // Simple GET request example:
                $http({
                    method: 'GET',
                    url: '/api/v1/repair_requests/requests',
                    params: {tech_id: Auth._currentUser.id}
                }).then(function successCallback(response) {
                    $scope.order = response.data[0];
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });

                $scope.complete = function(action){
                    $http({
                        method: 'PUT',
                        url: '/api/v1/repair_requests/complete_request'
                    }).then(function successCallback(response) {
                        if(response.data.result === 'success'){
                            $scope.info_message = 'You have successfully completed the request';
                        }
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
                }

            }, function(error) {
                $location.path('/')
            });

        }]);