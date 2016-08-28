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
            //tech_id: $scope.tech_id,
            tech_id: 1,
            customer_email: $scope.customer_email,
            phone: $scope.phone,
            location: $scope.location,
            device: $scope.device,
            model: $scope.model,
            color: $scope.color,
            issue: $scope.issue,
            price: '110',
            warranty: $scope.warranty
        };

        //Stripe.setPublishableKey('pk_test_8vy0svTHE9RNRs2uz4F1AnT9');

        $scope.pay = function(){
            var handler = StripeCheckout.configure({
                key: 'pk_test_8kPHFFUZjXxX2TmqALPXWpM4',
                image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
                locale: 'auto',
                token: function(token) {
                    $scope.info['stripeToken'] = token.id;
                    $http({
                        method: 'POST',
                        url: '/checkouts',
                        data: $scope.info
                    }).then(function successCallback(response) {
                        if (response.data.result === 'success'){
                            $location.path('/thank_you');
                        } else{
                            $scope.error = response.data.result;
                        }
                    }, function errorCallback(response) {
                        $scope.error = 'Something went wrong. Please refresh and try again';
                    });
                }
            });

            // Open Checkout with further options:
            handler.open({
                name: 'BECONVE',
                amount: $scope.price * 100,
                zipCode: true
            });

        };
    }])
;
