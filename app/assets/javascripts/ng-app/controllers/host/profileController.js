angular.module('BeConve')
    .controller('profileController', ['$scope', '$location', 'Shop', 'Auth', '$http', 'fileUpload', 'Upload',
        function($scope, $location, Shop, Auth, $http, fileUpload, Upload) {

        Auth.currentUser().then(function(user) {

            var shop = Shop.get({ id: user.id }, function() {
                $scope.name = shop.shop.name;
                $scope.phone = shop.shop.phone;
                $scope.address = shop.shop.address;
                // $scope.reviews = shop.shop.reviews;
                // $scope.reviews_link = shop.shop.reviews_link;
                // $scope.image = shop.shop.image;
            });

            }, function(error) {
            $location.path('/')
        });

    }]);