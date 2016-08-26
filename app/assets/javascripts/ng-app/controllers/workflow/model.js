angular.module('BeConve')
    .controller('modelController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {

        if (angular.isUndefined($sessionStorage.device) || $sessionStorage.device === ''){
            $location.url('/device');
        }

        if ($sessionStorage.device === 'Iphone'){
            $scope.modelNames = [
                {
                    name: '4'
                }, {
                    name: '4S'
                }, {
                    name: '5'
                }, {
                    name: '5C'
                }, {
                    name: '5S'
                }, {
                    name: '6'
                }, {
                    name: '6+'
                }, {
                    name: '6S'
                }, {
                    name: '6S+'
                }, {
                    name: 'SE'
                }
            ];
        }else if($sessionStorage.device === 'Ipad'){
            $scope.modelNames = [
                {
                    parent: 3,
                    id: 25,
                    name: '2',
                    desc: ''
                }, {
                    parent: 3,
                    id: 26,
                    name: '3',
                    desc: ''
                }, {
                    parent: 3,
                    id: 27,
                    name: '4',
                    desc: ''
                }, {
                    parent: 3,
                    id: 28,
                    name: 'Mini',
                    desc: ''
                }, {
                    parent: 3,
                    id: 29,
                    name: 'Mini 2',
                    desc: ''
                }, {
                    parent: 3,
                    id: 30,
                    name: 'Mini 3',
                    desc: ''
                }, {
                    parent: 3,
                    id: 31,
                    name: 'Air',
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