angular.module('BeConve')
    .controller('modelController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {

        if (angular.isUndefined($sessionStorage.device) || $sessionStorage.device === ''){
            $location.url('/device');
        }

        if ($sessionStorage.device === 'Iphone'){
            $scope.modelNames = [
                {
                    name: 'Iphone 4'
                }, {
                    name: 'Iphone 4S'
                }, {
                    name: 'Iphone 5'
                }, {
                    name: 'Iphone 5C'
                }, {
                    name: 'Iphone 5S'
                }, {
                    name: 'Iphone 6'
                }, {
                    name: 'Iphone 6 Plus'
                }, {
                    name: 'Iphone 6S'
                }, {
                    name: 'Iphone 6S Plus'
                }, {
                    name: 'Iphone SE'
                }
            ];
        }else if($sessionStorage.device === 'Ipad'){
            $scope.modelNames = [
                {
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
            ]
        }else {
            $scope.modelNames = [
                {
                    name: 'Note'
                }, {
                    name: 'Note 2'
                }, {
                    name: 'Note 3'
                }, {
                    name: 'S3'
                }, {
                    name: 'S4'
                }, {
                    name: 'S5'
                }
            ];
        }


        $scope.modelPick = function(model){
            $sessionStorage['model'] = model;
            $location.path('/color');
        };

        //$scope.$watch(angular.bind(this, function () {
        //    return $scope.location;
        //}), function(value) {
        //    debugger;
        //    if (angular.isUndefined(value) || value === '') {
        //        $scope.valid = false;
        //    } else {
        //        $scope.valid = true;
        //    }
        //});

    }]);