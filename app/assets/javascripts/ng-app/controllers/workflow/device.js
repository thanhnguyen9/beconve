angular.module('BeConve')
    .controller('deviceController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {

        $scope.deviceNames = [
            {
            id: 1,
            name: 'Apple',
            desc: ''
        }, {
            id: 2,
            name: 'Samsung',
            desc: ''
        }, {
            id: 3,
            name: 'Ipad',
            desc: ''
        }
        ];

        $scope.modelNames = [
            {
            parent: 1,
            id: 9,
            name: 'Iphone 4',
            desc: ''
        }, {
            parent: 1,
            id: 10,
            name: 'Iphone 4S',
            desc: ''
        }, {
            parent: 1,
            id: 11,
            name: 'Iphone 5',
            desc: ''
        }, {
            parent: 1,
            id: 12,
            name: 'Iphone 5C',
            desc: ''
        }, {
            parent: 1,
            id: 13,
            name: 'Iphone 5S',
            desc: ''
        }, {
            parent: 1,
            id: 14,
            name: 'Iphone 6',
            desc: ''
        }, {
            parent: 1,
            id: 15,
            name: 'Iphone 6 Plus',
            desc: ''
        }, {
            parent: 1,
            id: 16,
            name: 'Iphone 6S',
            desc: ''
        }, {
            parent: 1,
            id: 17,
            name: 'Iphone 6S Plus',
            desc: ''
        }, {
            parent: 1,
            id: 18,
            name: 'Iphone SE',
            desc: ''
        }, {
            parent: 2,
            id: 19,
            name: 'Note',
            desc: ''
        }, {
            parent: 2,
            id: 20,
            name: 'Note 2',
            desc: ''
        }, {
            parent: 2,
            id: 21,
            name: 'Note 3',
            desc: ''
        }, {
            parent: 2,
            id: 22,
            name: 'S3',
            desc: ''
        }, {
            parent: 2,
            id: 23,
            name: 'S4',
            desc: ''
        }, {
            parent: 2,
            id: 24,
            name: 'S5',
            desc: ''
        }, {
            parent: 3,
            id: 25,
            name: 'Ipad 2',
            desc: ''
        }, {
            parent: 3,
            id: 26,
            name: 'Ipad 3',
            desc: ''
        }, {
            parent: 3,
            id: 27,
            name: 'Ipad 4',
            desc: ''
        }, {
            parent: 3,
            id: 28,
            name: 'Ipad Mini',
            desc: ''
        }, {
            parent: 3,
            id: 29,
            name: 'Ipad Mini 2',
            desc: ''
        }, {
            parent: 3,
            id: 30,
            name: 'Ipad Mini 3',
            desc: ''
        }, {
            parent: 3,
            id: 31,
            name: 'Ipad Air',
            desc: ''
        }

        ];

        $scope.issueNames = [
            {
                id: 1,
                name: 'Broken Screen',
                desc: ''
            }, {
                id: 2,
                name: 'Faulty Battery',
                desc: ''
            }, {
                id: 3,
                name: "Won't turn on",
                desc: ''
            }, {
                id: 4,
                name: "Liquid Damage diagnostic",
                desc: ''
            }
        ];

        $scope.$watch(angular.bind(this, function () {
            return $scope.modelSelect;
        }), function(value) {
            if (value === undefined){
                console.log("Waiting for user's input");
            }else if (value.name === 'Iphone 4' || value.name === 'Iphone 4S' || value.name === 'Iphone 5' || value.name === 'Iphone 5C' ||
                value.name === 'Iphone 5S' || value.name === 'Note 3' || value.name === 'Ipad 2' || value.name === 'Ipad 3' || value.name === 'Ipad 4' ||
                    value.name === 'Ipad Mini'){
                $scope.colorNames = [
                    {
                        id: 1,
                        name: 'White',
                        desc: ''
                    }, {
                        id: 2,
                        name: 'Black',
                        desc: ''
                    }
                ];
            }else if (value.name === 'Iphone 6' || value.name === 'Iphone 6 Plus'){
                $scope.colorNames = [
                    {
                        id: 1,
                        name: 'White',
                        desc: ''
                    }, {
                        id: 2,
                        name: 'Black',
                        desc: ''
                    }, {
                        id: 3,
                        name: 'Gold',
                        desc: ''
                    }
                ];
            }else if (value.name === 'Iphone 6S' || value.name === 'Iphone 6S Plus' || value.name === 'Iphone SE'){
                $scope.colorNames = [
                    {
                        id: 1,
                        name: 'White',
                        desc: ''
                    }, {
                        id: 2,
                        name: 'Black',
                        desc: ''
                    }, {
                        id: 3,
                        name: 'Gold',
                        desc: ''
                    }, {
                        id: 4,
                        name: 'Rose Gold',
                        desc: ''
                    }
                ];
            }else if (value.name === 'Note'){
                $scope.colorNames = [
                    {
                        id: 1,
                        name: 'White',
                        desc: ''
                    }, {
                        id: 2,
                        name: 'Black',
                        desc: ''
                    }, {
                        id: 3,
                        name: 'Gold',
                        desc: ''
                    }, {
                        id: 4,
                        name: 'Blue',
                        desc: ''
                    }
                ];
            }else if (value.name === 'Note 2'){
                $scope.colorNames = [
                    {
                        id: 1,
                        name: 'White',
                        desc: ''
                    }, {
                        id: 2,
                        name: 'Black',
                        desc: ''
                    }, {
                        id: 3,
                        name: 'Gold',
                        desc: ''
                    }, {
                        id: 3,
                        name: 'Blue',
                        desc: ''
                    }, {
                        id: 4,
                        name: 'Grey',
                        desc: ''
                    }
                ];
            }else if (value.name === 'S3'){
                $scope.colorNames = [
                    {
                        id: 1,
                        name: 'White',
                        desc: ''
                    }, {
                        id: 2,
                        name: 'Blue',
                        desc: ''
                    }, {
                        id: 3,
                        name: 'Purple',
                        desc: ''
                    }, {
                        id: 4,
                        name: 'Red',
                        desc: ''
                    }
                ];
            }else if (value.name === 'S4'){
                $scope.colorNames = [
                    {
                        id: 1,
                        name: 'White',
                        desc: ''
                    }, {
                        id: 2,
                        name: 'Blue',
                        desc: ''
                    }, {
                        id: 3,
                        name: 'Blue',
                        desc: ''
                    }, {
                        id: 4,
                        name: 'Purple',
                        desc: ''
                    }, {
                        id: 5,
                        name: 'Red',
                        desc: ''
                    }, {
                        id: 6,
                        name: 'Grey',
                        desc: ''
                    }
                ];
            }else if (value.name === 'S5'){
                $scope.colorNames = [
                    {
                        id: 1,
                        name: 'White',
                        desc: ''
                    }, {
                        id: 2,
                        name: 'Blue',
                        desc: ''
                    }, {
                        id: 3,
                        name: 'Gold',
                        desc: ''
                    }, {
                        id: 4,
                        name: 'Red',
                        desc: ''
                    }, {
                        id: 5,
                        name: 'Grey',
                        desc: ''
                    }
                ];
            }else if (value.name === 'Ipad Mini 2'){
                $scope.colorNames = [
                    {
                        id: 1,
                        name: 'Silver',
                        desc: ''
                    }, {
                        id: 2,
                        name: 'Space Gray',
                        desc: ''
                    }
                ];
            }else if (value.name === 'Ipad Mini 3'){
                $scope.colorNames = [
                    {
                        id: 1,
                        name: 'Silver',
                        desc: ''
                    }, {
                        id: 2,
                        name: 'Gold',
                        desc: ''
                    }, {
                        id: 3,
                        name: 'Space Gray',
                        desc: ''
                    }
                ];
            }else{
                $scope.colorNames = [
                    {
                        id: 1,
                        name: 'Space Gray',
                        desc: ''
                    }, {
                        id: 2,
                        name: 'Silver',
                        desc: ''
                    }
                ];
            }
        });

        $scope.next = function(){
            var deviceSelect = '';

            if ($scope.deviceSelect === 1){
                var deviceSelect = 'Apple'
            }else if($scope.deviceSelect === 2){
                var deviceSelect = 'Samsung'
            }else {
                var deviceSelect = 'Ipad'
            }
            $sessionStorage['device'] = deviceSelect;
            $sessionStorage['model'] = $scope.modelSelect.name;
            $sessionStorage['color'] = $scope.colorSelect.name;
            $sessionStorage['issue'] = $scope.issueSelect.name;

            $location.path('/availability');
        }

    }])

.filter('modelDropDown', function () {
        return function (modelSelect, deviceSelect) {
            var filtered = [];
            if (deviceSelect === null) {
                return filtered;
            }
            angular.forEach(modelSelect, function (s2) {
                if (s2.parent == deviceSelect) {
                    filtered.push(s2);
                }
            });
            return filtered;
        };
    });