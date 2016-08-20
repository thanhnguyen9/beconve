angular.module('BeConve')
    .controller('iphonePriceSetupController', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {

        Auth.currentUser().then(function(user) {
            console.log(Auth._currentUser);
        }, function(error) {
            $location.path('/')
        });


        $scope.iphoneScreens = [
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

        $scope.iphoneBatteries = [
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

        $scope.iphoneNotOns = [
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

        $scope.iphoneLiquids = [
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
        $scope.iphoneBrokenScreenSubmit = function(){
            console.log('Inside iphone broken screen submit');
            console.log($scope.iphoneScreens);
        };

        $scope.iphoneFaultyBatterySubmit = function(){
            console.log('Inside iphone faulty battery submit');
            console.log($scope.iphoneBatteries);
        };
        $scope.iphoneNotTurnOnSubmit = function(){
            console.log('Inside iphone not on submit');
            console.log($scope.iphoneNotOns);
        };
        $scope.iphoneLiquidDamageSubmit = function(){
            console.log('Inside liquid damage submit');
            console.log( $scope.iphoneLiquids);
        };

    }]);