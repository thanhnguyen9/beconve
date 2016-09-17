angular.module('BeConve')
    .controller('samsungPriceSetupController', ['$scope', '$location', 'Auth', '$http', 'Price', function($scope, $location, Auth, $http, Price) {

        Auth.currentUser().then(function(user) {
            $scope.newIssue = function(issue) {
                //Hide the info of the request
                $scope.error = false;
                $scope.info_message = false;

                $scope.prices = {};
                $scope.prices.type = 'samsung';
                $scope.prices.issue = issue;
                $scope.loading = true;

                $http({
                    method: 'GET',
                    url: '/api/v1/prices/',
                    params: $scope.prices
                }).then(function successCallback(response) {
                    if(response.data.response.status === 'success'){
                        $scope.models = response.data.response.prices;
                        $scope.loading = false;
                    }else{
                        $scope.error = 'Something went wrong. Please refresh the page';
                        $scope.loading = false;
                    }
                }, function errorCallback(response) {
                    $scope.error = 'Something went wrong. Please refresh the page';
                    $scope.loading = false;
                });
            };

        }, function(error) {
            $location.path('/')
        });

        //IPHONE
        $scope.samsungPriceSubmit = function(model, issue){
            $scope.updateLoading = true;
            $scope.price = Price.get({ id: model.id }, function() {
                // $scope.entry is fetched from server and is an instance of Entry
                $scope.price.price = {};
                $scope.price.price.price = parseInt(model.price);
                $scope.price.$update({id: model.id}, function(res) {
                    if(res.response === 'success'){
                        $scope.info_message = 'Success';
                        $scope.updateLoading = false;
                    }else{
                        $scope.error = 'Something went wrong. Please try again';
                        $scope.updateLoading = false;
                    }
                });
            });
        };

    }]);