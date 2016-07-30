angular.module('BeConve')
    .controller('reservationController', ['$scope', '$location', '$sessionStorage', '$http', function($scope, $location, $sessionStorage, $http) {

        //$http({
        //    method: 'GET',
        //    url: '/checkouts/new'
        //}).then(function successCallback(response) {
        //     braintree.setup(response.data, "dropin", {
        //         container: "payment-form"
        //     });
        //}, function errorCallback(response) {
        //    // called asynchronously if an error occurs
        //    // or server returns response with an error status.
        //});

        $scope.location = $sessionStorage.location;
        $scope.device = $sessionStorage.device;
        $scope.model = $sessionStorage.model;
        $scope.color = $sessionStorage.color;
        $scope.issue = $sessionStorage.issue;
        $scope.price = $sessionStorage.price;
        $scope.warranty = $sessionStorage.warranty;

    }]);
