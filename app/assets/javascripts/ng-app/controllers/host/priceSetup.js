angular.module('BeConve')
    .controller('priceSetupController', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {

        $scope.checkboxModel = {
            iphone : true
        };

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

        //IPHONE
        $scope.iphoneBrokenScreenSubmit = function(){
            console.log($scope.iphoneScreens);
        };

        $scope.iphoneFaultyBatterySubmit = function(){
            console.log($scope.iphoneBatteries);
        };
        $scope.iphoneNotTurnOnSubmit = function(){
            console.log($scope.iphoneNotOns);
        };
        $scope.iphoneLiquidDamageSubmit = function(){
            console.log( $scope.iphoneLiquids);
        };

        //IPAD
        $scope.ipadBrokenScreenSubmit = function(){
            console.log($scope.ipadScreens);
        };

        $scope.ipadFaultyBatterySubmit = function(){
            console.log($scope.ipadBatteries);
        };
        $scope.ipadNotTurnOnSubmit = function(){
            console.log($scope.ipadNotOns);
        };
        $scope.ipadLiquidDamageSubmit = function(){
            console.log($scope.ipadLiquids);
        };

        //SAMSUNG
        $scope.samsungBrokenScreenSubmit = function(){
            console.log($scope.samsungScreens);
        };

        $scope.samsungFaultyBatterySubmit = function(){
            console.log($scope.samsungBatteries);
        };
        $scope.samsungNotTurnOnSubmit = function(){
            console.log($scope.samsungNotOns);
        };
        $scope.samsungLiquidDamageSubmit = function(){
            console.log($scope.samsungLiquids);
        };

    }]);