angular.module('BeConve')
    .controller('ipadPriceSetupController', ['$scope', '$location', 'Auth', '$http', 'Price', function($scope, $location, Auth, $http, Price) {

        Auth.currentUser().then(function(user) {

            $scope.newIssue = function(issue) {
                $scope.prices = {};
                $scope.prices.type = 'ipad';
                $scope.prices.issue = issue;
                console.log(issue);

                $http({
                    method: 'GET',
                    url: '/api/v1/prices/',
                    params: $scope.prices
                }).then(function successCallback(response) {
                    if(response.data.response.status === 'success'){
                        $scope.models = response.data.response.prices;
                    }else{
                        $scope.order = $scope.alert = 'Something went wrong. Please refresh the page'
                    }
                }, function errorCallback(response) {
                    $scope.alert = 'Something went wrong. Please refresh the page'
                });
            };

        }, function(error) {
            $location.path('/')
        });

        //IPAD
        $scope.ipadPriceSubmit = function(model, issue){
            $scope.price = Price.get({ id: model.id }, function() {
                // $scope.entry is fetched from server and is an instance of Entry
                $scope.price.price = {};
                $scope.price.price.price = parseInt(model.price);
                $scope.price.$update({id: model.id}, function(res) {
                    if(res.response === 'success'){
                        $scope.info_message = 'Success'
                    }else{
                        $scope.error = 'Something went wrong. Please try again'
                    }
                });
            });

            //$http({
            //    method: 'POST',
            //    url: '/api/v1/prices/',
            //    params: $scope.model
            //}).then(function successCallback(response) {
            //    if(response.data.response.status === 'success'){
            //        $scope.info_message = 'Success'
            //
            //    }else{
            //        $scope.order = $scope.alert = 'Failed. Please refresh.'
            //    }
            //}, function errorCallback(response) {
            //    $scope.alert = 'Failed. Please refresh.'
            //});

            //$scope.model.$save(function(response) {
            //    if (response.response.status === 'success'){
            //        $scope.info_message = 'Success'
            //    } else {
            //        $scope.error = 'Failed. Please refresh.'
            //    }
            //}, function(data,headers) {
            //    $scope.error = 'Failed. Please refresh.'
            //});
            console.log(model.name);
            console.log(model.price);
        };

    }]);