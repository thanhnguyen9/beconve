angular.module('BeConve')
    .controller('samsungPriceSetupController', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {

        Auth.currentUser().then(function(user) {
            console.log(Auth._currentUser);
        }, function(error) {
            $location.path('/')
        });

        $scope.samsungScreens = [
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

        $scope.samsungBatteries = [
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

        $scope.samsungNotOns = [
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

        $scope.samsungLiquids = [
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
        $scope.samsungBrokenScreenSubmit = function(){
            console.log('inside samsung broken screen submit');
            console.log($scope.samsungScreens);
        };

        $scope.samsungFaultyBatterySubmit = function(){
            console.log('inside samsung faulty battery submit');
            console.log($scope.samsungBatteries);
        };
        $scope.samsungNotTurnOnSubmit = function(){
            console.log('inside samsung not on submit');
            console.log($scope.samsungNotOns);
        };
        $scope.samsungLiquidDamageSubmit = function(){
            console.log('inside samsung liquid damage submit');
            console.log($scope.samsungLiquids);
        };

    }]);