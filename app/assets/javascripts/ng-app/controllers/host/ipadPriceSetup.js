angular.module('BeConve')
    .controller('ipadPriceSetupController', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {

        Auth.currentUser().then(function(user) {
            console.log(Auth._currentUser);
        }, function(error) {
            $location.path('/')
        });

        $scope.ipadScreens = [
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

        $scope.ipadBatteries = [
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

        $scope.ipadNotOns = [
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

        $scope.ipadLiquids = [
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
        $scope.ipadBrokenScreenSubmit = function(){
            console.log('Inside ipad broken screen submit');
            console.log($scope.ipadScreens);
        };

        $scope.ipadFaultyBatterySubmit = function(){
            console.log('Inside ipad faulty battery submit');
            console.log($scope.ipadBatteries);
        };

        $scope.ipadNotTurnOnSubmit = function(){
            console.log('Inside ipad not on submit');
            console.log($scope.ipadNotOns);
        };
        $scope.ipadLiquidDamageSubmit = function(){
            console.log('Inside ipad liquid damage submit');
            console.log($scope.ipadLiquids);
        };

    }]);