angular.module('BeConve')
    .controller('reservationController', ['$scope', '$location', '$sessionStorage', '$http', 'Auth', '$window', 'Order',
        function($scope, $location, $sessionStorage, $http, Auth, $window, Order) {

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
        $scope.model = $sessionStorage.model.name;
        $scope.color = $sessionStorage.color;
        $scope.issue = $sessionStorage.issue.name;
        $scope.price = $sessionStorage.price;
        $scope.warranty = $sessionStorage.warranty;

        $scope.order = {

        };

        //Stripe.setPublishableKey('pk_test_8vy0svTHE9RNRs2uz4F1AnT9');

        $scope.pay = function(){
            var handler = StripeCheckout.configure({
                key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
                image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
                locale: 'auto',
                token: function(token) {

                    $scope.order = new Order(); //You can instantiate resource class

                    $scope.order.order = {};

                    //tech_id: $scope.tech_id,
                    $scope.order.order.stripeToken = token.id;
                    $scope.order.order.tech_id = 1;
                    $scope.order.order.customer_phone = $scope.phoneVal;
                    $scope.order.order.location = $scope.location;
                    $scope.order.order.device = $scope.device;
                    $scope.order.order.model = $sessionStorage.model.desc;
                    $scope.order.order.color = $scope.color;
                    $scope.order.order.issue = $sessionStorage.issue.desc;
                    $scope.order.order.price = '110';
                    $scope.order.order.warranty = $scope.warranty;

                    $scope.order.$save(function(response) {
                        if (response.result === 'success'){
                            $location.path('/thank_you');
                        } else if (response.result === 'Shop is no longer available. Please select another shop'){
                            $scope.error = response.result;
                            $scope.goBackAvailability = true;
                        } else {
                            $scope.error = response.result + 'Please refresh and try again';
                        }
                    }, function(data,headers) {
                        debugger;
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
