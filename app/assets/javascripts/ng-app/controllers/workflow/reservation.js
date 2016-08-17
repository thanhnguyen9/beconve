angular.module('BeConve')
    .controller('reservationController', ['$scope', '$location', '$sessionStorage', '$http', 'Auth', '$window',
        function($scope, $location, $sessionStorage, $http, Auth, $window) {

        if (angular.isUndefined($sessionStorage.techId) || $sessionStorage.techId === ''){
            $location.url('/availability');
        }

        if(angular.isUndefined($sessionStorage.techName) || $sessionStorage.techName === ''){
            $location.url('/availability');
        }

        $scope.loading = false;

        $scope.techId = $sessionStorage.techId;
        $scope.techName = $sessionStorage.techName;
        $scope.location = $sessionStorage.location;
        $scope.device = $sessionStorage.device;
        $scope.model = $sessionStorage.model;
        $scope.color = $sessionStorage.color;
        $scope.issue = $sessionStorage.issue;
        $scope.price = $sessionStorage.price;
        $scope.warranty = $sessionStorage.warranty;

        $scope.info = {
            tech_id: $scope.tech_id,
            email: $scope.email,
            phone: $scope.phone,
            location: $scope.location,
            device: $scope.device,
            model: $scope.model,
            color: $scope.color,
            issue: $scope.issue,
            price: '110',
            warranty: $scope.warranty,
            nonce: $scope.nonce
        };

        $scope.pay = function(){
            // Stripe Response Handler
            $scope.stripeCallback = function (code, result) {
                $scope.paying = true;
                if (result.error) {
                    $scope.error = 'Something went wrong. Please check the card information';
                    $scope.paying = false;
                } else {
                    $scope.info['stripeToken'] = result.id;

                    $http({
                        method: 'POST',
                        url: '/checkouts',
                        data: $scope.info
                    }).then(function successCallback(response) {
                        if (response.data.result === 'success'){
                            $location.path('/thank_you');
                        } else{
                            $scope.error = response.data.message;
                            $scope.paying = false;
                        }
                    }, function errorCallback(response) {
                        $scope.error = 'Something went wrong. Please try after sometimes';
                        $scope.paying = false;
                    });
                }
            };
        };
    }])
;
