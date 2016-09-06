angular.module('BeConve')
    .controller('repairRequestsController', ['$scope', '$location', 'Auth', 'Technician', '$http',
        function($scope, $location, Auth, Technician, $http) {

        Auth.currentUser().then(function(user) {

            $http({
                method: 'GET',
                url: '/api/v1/repair_requests/requests'
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
                if(action === 'approved'){
                    $http({
                        method: 'PUT',
                        url: '/api/v1/repair_requests/approve_request',
                        data: $scope.order
                    }).then(function successCallback(response) {
                      if(response.data.response === 'success'){
                          $scope.info_message = 'You have successfully approved the request';
                          $(".modal-backdrop").hide();
                          $location.path('/complete_request')
                      }else{
                          $scope.alert = 'Something went wrong. Please refresh and try again'
                      }
                    }, function errorCallback(response) {
                        $scope.alert = 'Something went wrong. Please refresh and try again'
                    });
                }else{
                    if(angular.isUndefined($scope.reason) || $scope.location === ''){
                        $scope.alert = 'Please input reason why you would like to decline the request.'
                    }else{
                        $http({
                            method: 'PUT',
                            url: '/api/v1/repair_requests/decline_request',
                            data: $scope.order
                        }).then(function successCallback(response) {
                            if(response.data.response === 'success'){
                                $scope.info_message = 'You have successfully declined the request';
                                $scope.alert = false;
                            }else{
                                $scope.alert = 'Something went wrong. Please refresh and try again'
                            }
                        }, function errorCallback(response) {
                            $scope.alert = 'Something went wrong. Please refresh and try again'
                        });
                    }
                }
            }

        }, function(error) {
            $location.path('/')
        });

    }]);