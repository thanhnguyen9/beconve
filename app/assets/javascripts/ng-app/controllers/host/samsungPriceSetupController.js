angular.module('BeConve')
    .controller('samsungPriceSetupController', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {

        Auth.currentUser().then(function(user) {
            console.log(Auth._currentUser);
        }, function(error) {
            $location.path('/')
        });

        $scope.samsungModels = [
            {
                name: 'note',
                price: 0
            },
            {
                name: 'note 2',
                price: 0
            },
            {
                name: 'note 3',
                price: 0
            },
            {
                name: 'S3',
                price: 0
            },
            {
                name: 'S4',
                price: 0
            },
            {
                name: 'S5',
                price: 0
            }
        ];

        //SAMSUNG
        $scope.samsungPriceSubmit = function(model, type){
            console.log('inside samsung' + type + 'submit');
            console.log(model.name);
            console.log(model.price);
        };

    }]);