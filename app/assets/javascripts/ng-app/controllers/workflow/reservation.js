angular.module('BeConve')
    .controller('reservationController', ['$scope', '$location', '$sessionStorage', '$http', function($scope, $location, $sessionStorage, $http) {

        $scope.location = $sessionStorage.location;
        $scope.device = $sessionStorage.device;
        $scope.model = $sessionStorage.model;
        $scope.color = $sessionStorage.color;
        $scope.issue = $sessionStorage.issue;
        $scope.price = $sessionStorage.price;
        $scope.warranty = $sessionStorage.warranty;


        $scope.info = {location: $scope.location,
            device: $scope.device,
            model: $scope.model,
            color: $scope.color,
            issue: $scope.issue,
            price: $scope.price,
            warranty: $scope.warranty,
            nonce: $scope.nonce
        };

        $http({
            method: 'GET',
            url: '/checkouts/new'
        }).then(function successCallback(response) {
             braintree.setup(response.data, "dropin", {
                 container: "payment-form",
                 onPaymentMethodReceived: function (obj) {
                     $scope.info['payment_method_nonce'] = obj.nonce;
                     $scope.$apply(function(obj) {
                         $http({
                             method: 'POST',
                             url: '/checkouts',
                             data: $scope.info
                         }).then(function successCallback(response) {
                             console.log(response);
                         }, function errorCallback(response) {
                             // called asynchronously if an error occurs
                             // or server returns response with an error status.
                         });
                     });
                 }
             });
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    }]);
