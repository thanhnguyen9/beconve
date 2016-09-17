angular.module('BeConve')
    .controller('modelController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {

        if (angular.isUndefined($sessionStorage.device) || $sessionStorage.device === ''){
            $location.url('/device');
        }

        if ($sessionStorage.device === 'Iphone'){
            $scope.modelNames = [
                {
                    name: '4',
                    desc: 'iphone 4'
                }, {
                    name: '4S',
                    desc: 'iphone 4s'
                }, {
                    name: '5',
                    desc: 'iphone 5'
                }, {
                    name: '5C',
                    desc: 'iphone 5c'
                }, {
                    name: '5S',
                    desc: 'iphone 5s'
                }, {
                    name: '6',
                    desc: 'iphone 6'
                }, {
                    name: '6+',
                    desc: 'iphone 6+'
                }, {
                    name: '6S',
                    desc: 'iphone 6s'
                }, {
                    name: '6S+',
                    desc: 'iphone 6s+'
                }, {
                    name: 'SE',
                    desc: 'iphone se'
                }
            ];
        }else if($sessionStorage.device === 'Ipad'){
            $scope.modelNames = [
                {
                    parent: 3,
                    id: 25,
                    name: '2',
                    desc: 'ipad 2'
                }, {
                    parent: 3,
                    id: 26,
                    name: '3',
                    desc: 'ipad 3'
                }, {
                    parent: 3,
                    id: 27,
                    name: '4',
                    desc: 'ipad 4'
                }, {
                    parent: 3,
                    id: 28,
                    name: 'Mini',
                    desc: 'ipad mini'
                }, {
                    parent: 3,
                    id: 29,
                    name: 'Mini 2',
                    desc: 'ipad mini 2'
                }, {
                    parent: 3,
                    id: 30,
                    name: 'Mini 3',
                    desc: 'ipad mini 3'
                }, {
                    parent: 3,
                    id: 31,
                    name: 'ipad Air',
                    desc: 'ipad air'
                }
            ]
        }else {
            $scope.modelNames = [
                {
                    name: 'note',
                    desc: 'note'
                }, {
                    name: 'note 2',
                    desc: 'note 2'
                }, {
                    name: 'note 3',
                    desc: 'note 3'
                }, {
                    name: 'S3',
                    desc: 'galaxy s3'
                }, {
                    name: 'S4',
                    desc: 'galaxy s4'
                }, {
                    name: 'S5',
                    desc: 'galaxy s5'
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