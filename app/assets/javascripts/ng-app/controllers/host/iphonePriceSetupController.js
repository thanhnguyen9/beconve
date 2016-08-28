angular.module('BeConve')
    .controller('iphonePriceSetupController', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {

        Auth.currentUser().then(function(user) {
            console.log(Auth._currentUser);
        }, function(error) {
            $location.path('/')
        });


        $scope.iphoneModels = [
            {
                name: 'iphone 4',
                price: 0
            },
            {
                name: 'iphone 4S',
                price: 0
            },
            {
                name: 'iphone 5',
                price: 0
            },
            {
                name: 'iphone 5C',
                price: 0
            },
            {
                name: 'iphone 5S',
                price: 0
            },
            {
                name: 'iphone 6',
                price: 0
            },
            {
                name: 'iphone 6 Plus',
                price: 0
            },
            {
                name: 'iphone 6S',
                price: 0
            },
            {
                name: 'iphone 6S Plus',
                price: 0
            },
            {
                name: 'iphone SE',
                price: 0
            }

        ];

        //IPHONE
        $scope.iphonePriceSubmit = function(model, type){
            console.log('Inside iphone' + type +  'submit');
            console.log(model.name);
            console.log(model.price);
        };

    }]);