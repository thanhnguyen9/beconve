angular
    .module('BeConve')

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

        $scope.stripeCallback = function(status, response){
            if(response.error) {
              $scope.error = response.error;
            } else {
              // got stripe token, now charge it or smt
              token = response.id;
              $scope.order = new Order(); //You can instantiate resource class

                $scope.order.order = {};

                //tech_id: $scope.tech_id,
                $scope.order.order.stripeToken = token;
                $scope.order.order.tech_id = 1;
                $scope.order.order.customer_phone = $scope.phoneVal;
                $scope.order.order.customer_email = $scope.customer_email;
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
                        $scope.error = response.result + ' Please refresh and try again';
                    }
                }, function(data,headers) {
                    $scope.error = 'Something went wrong. Please refresh and try again';
                });
            }
        }


        // Stripe.setPublishableKey('pk_test_8kPHFFUZjXxX2TmqALPXWpM4');
        
        // var handler = StripeCheckout.configure({
        //   key: 'pk_test_jn4kwf6PBwEsoh2lZ86N3Ng4',
        //   image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        //   locale: 'auto',
        //   token: function(token) {
        //     // You can access the token ID with `token.id`.
        //     // Get the token ID to your server-side code for use.
        //   }
        // }); 

        // $scope.pay = function(){
        //     debugger;
        //     handler.open({
        //     name: 'fb04f2a8.ngrok.io',
        //     description: '2 widgets',
        //     amount: 2000
        //   });
        // };
        
        // $scope.pay = function(){
        //     var handler = StripeCheckout.configure({
        //         key: 'pk_test_8kPHFFUZjXxX2TmqALPXWpM4',
        //         image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        //         locale: 'auto',
        //         token: function(token) {

        //             $scope.order = new Order(); //You can instantiate resource class

        //             $scope.order.order = {};

        //             //tech_id: $scope.tech_id,
        //             $scope.order.order.stripeToken = token.id;
        //             $scope.order.order.tech_id = 1;
        //             $scope.order.order.customer_phone = $scope.phoneVal;
        //             $scope.order.order.location = $scope.location;
        //             $scope.order.order.device = $scope.device;
        //             $scope.order.order.model = $sessionStorage.model.desc;
        //             $scope.order.order.color = $scope.color;
        //             $scope.order.order.issue = $sessionStorage.issue.desc;
        //             $scope.order.order.price = '110';
        //             $scope.order.order.warranty = $scope.warranty;

        //             $scope.order.$save(function(response) {
        //                 if (response.result === 'success'){
        //                     $location.path('/thank_you');
        //                 } else if (response.result === 'Shop is no longer available. Please select another shop'){
        //                     $scope.error = response.result;
        //                     $scope.goBackAvailability = true;
        //                 } else {
        //                     $scope.error = response.result + 'Please refresh and try again';
        //                 }
        //             }, function(data,headers) {
        //                 debugger;
        //                 $scope.error = 'Something went wrong. Please refresh and try again';
        //             });
        //         }
        //     });

        // $scope.pay = function(){
        //     var handler = StripeCheckout.configure({
        //         key: 'pk_test_8kPHFFUZjXxX2TmqALPXWpM4',
        //         image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        //         locale: 'auto',
        //         token: function(token) {

        //             $scope.order = new Order(); //You can instantiate resource class

        //             $scope.order.order = {};

        //             //tech_id: $scope.tech_id,
        //             $scope.order.order.stripeToken = token.id;
        //             $scope.order.order.tech_id = 1;
        //             $scope.order.order.customer_phone = $scope.phoneVal;
        //             $scope.order.order.location = $scope.location;
        //             $scope.order.order.device = $scope.device;
        //             $scope.order.order.model = $sessionStorage.model.desc;
        //             $scope.order.order.color = $scope.color;
        //             $scope.order.order.issue = $sessionStorage.issue.desc;
        //             $scope.order.order.price = '110';
        //             $scope.order.order.warranty = $scope.warranty;

        //             $scope.order.$save(function(response) {
        //                 if (response.result === 'success'){
        //                     $location.path('/thank_you');
        //                 } else if (response.result === 'Shop is no longer available. Please select another shop'){
        //                     $scope.error = response.result;
        //                     $scope.goBackAvailability = true;
        //                 } else {
        //                     $scope.error = response.result + 'Please refresh and try again';
        //                 }
        //             }, function(data,headers) {
        //                 debugger;
        //                 $scope.error = 'Something went wrong. Please refresh and try again';
        //             });
        //         }
        //     });

            // Open Checkout with further options:
        //     handler.open({
        //         name: 'BECONVE',
        //         amount: $scope.price * 100,
        //         zipCode: true
        //     });

        // };
    }])
;
