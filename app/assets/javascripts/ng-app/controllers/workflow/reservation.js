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
            price: '2000.00',
            warranty: $scope.warranty,
            nonce: $scope.nonce
        };

        //$http({
        //    method: 'GET',
        //    url: '/checkouts/new'
        //}).then(function successCallback(response) {
        //     braintree.setup(response.data, "dropin", {
        //         container: "payment-form",
        //         onPaymentMethodReceived: function (obj) {
        //             $scope.info['payment_method_nonce'] = obj.nonce;
        //             $scope.$apply(function(obj) {
        //                 $scope.loading = true;
        //                 $scope.success = true;
        //
        //                 $http({
        //                     method: 'POST',
        //                     url: '/checkouts',
        //                     data: $scope.info
        //                 }).then(function successCallback(response) {
        //                     debugger;
        //                     if (response.data.result === 'success'){
        //                         $scope.loading = false;
        //
        //                         console.log(response.data.result);
        //                         $location.path('/thank_you');
        //                     } else{
        //                         $scope.error = response.data.result;
        //                         $scope.loading = false;
        //                         $scope.success = false;
        //                     }
        //                 }, function errorCallback(response) {
        //                     $scope.errors= 'Something went wrong. Please try after somet times'
        //                 });
        //             });
        //         }
        //     });
        //}, function errorCallback(response) {
        //    // called asynchronously if an error occurs
        //    // or server returns response with an error status.
        //});

            $scope.pay = function(){
                // Stripe Response Handler
                $scope.stripeCallback = function (code, result) {
                    if (result.error) {
                        $window.alert('Something went wrong! Error: ' + result.error.message);
                    } else {
                        $scope.info['stripeToken'] = result.id

                        $http({
                            method: 'POST',
                            url: '/checkouts',
                            data: $scope.info
                        }).then(function successCallback(response) {
                            if (response.data.result === 'success'){
                                $scope.loading = false;

                                console.log(response.data.result);
                                $location.path('/thank_you');
                            } else{
                                $scope.error = response.data.result;
                                $scope.loading = false;
                                $scope.success = false;
                            }
                        }, function errorCallback(response) {
                            $scope.error = 'Something went wrong. Please try after some times'
                        });
                        console.log('success! token: ' + result.id);
                    }
                };
            };


    }])
;
