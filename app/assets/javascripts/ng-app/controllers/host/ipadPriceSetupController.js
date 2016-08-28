angular.module('BeConve')
    .controller('ipadPriceSetupController', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {

        Auth.currentUser().then(function(user) {
            console.log(Auth._currentUser);
        }, function(error) {
            $location.path('/')
        });

        $scope.ipadModels = [
            {
                name: 'ipad 2',
                price: 0
            },
            {
                name: 'ipad 3',
                price: 0
            },
            {
                name: 'ipad 4',
                price: 0
            },
            {
                name: 'ipad mini',
                price: 0
            },
            {
                name: 'ipad mini 2',
                price: 0
            },
            {
                name: 'ipad mini 3',
                price: 0
            },
            {
                name: 'ipad air',
                price: 0
            }
        ];

        //IPAD
        $scope.ipadPriceSubmit = function(model, type){
            console.log('Inside ipad' + type + ' submit');
            console.log(model.name);
            console.log(model.price);
        };

    }]);