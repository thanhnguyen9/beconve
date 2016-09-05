angular.module('BeConve')
    .controller('completeRequestController', ['$scope', '$location', 'Auth', 'Technician', '$http',
        function($scope, $location, Auth, Technician, $http) {

            Auth.currentUser().then(function(user) {
                // Simple GET request example:
                $http({
                    method: 'GET',
                    url: '/api/v1/repair_requests/complete_request',
                    params: {tech_id: Auth._currentUser.id}
                }).then(function successCallback(response) {
                    if(response.data.response === null){
                        $scope.info_message = 'You do not have any request';
                    }else{
                        $scope.order = response.data.response;
                    }
                }, function errorCallback(response) {
                    $scope.alert = 'Something went wrong. Please refresh the page'
                });

                $scope.actionOnRequest = function(action){
                    if(action === 'completed'){
                        $http({
                            method: 'PUT',
                            url: '/api/v1/repair_requests/complete_action',
                            data: $scope.order
                        }).then(function successCallback(response) {
                            if(response.data.response === 'success'){
                                $scope.info_message = 'You have successfully completed the request. You are now online';
                            }else{
                                $scope.alert = 'Something went wrong. Please refresh and try again'
                            }
                        }, function errorCallback(response) {
                            $scope.alert = 'Something went wrong. Please refresh and try again'
                        })
                    }else{
                        debugger;
                        $http({
                            method: 'PUT',
                            url: '/api/v1/repair_requests/cancel_action',
                            data: $scope.order
                        }).then(function successCallback(response) {
                            if(response.data.result === 'success'){
                                if(response.data.response === 'success'){
                                    $scope.info_message = 'You have successfully declined the request. You are now online';
                                }else{
                                    $scope.alert = 'Something went wrong. Please refresh and try again'
                                }
                            }
                        }, function errorCallback(response) {
                            $scope.alert = 'Something went wrong. Please refresh and try again'
                        })
                    }

                }

            }, function(error) {
                $location.path('/')
            });

        }]);