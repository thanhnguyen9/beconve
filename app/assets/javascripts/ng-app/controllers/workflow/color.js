angular.module('BeConve')
    .controller('colorController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {

        var model = $sessionStorage.model;

        if (model === 'Iphone 4' || model === 'Iphone 4S' || model === 'Iphone 5' || model === 'Iphone 5C' ||
            model === 'Iphone 5S' || model === 'Note 3' || model === 'Ipad 2' || model === 'Ipad 3' || model === 'Ipad 4' ||
            model === 'Ipad Mini'){
            $scope.colorNames = [
                {
                    name: 'White'
                }, {
                    name: 'Black'
                }
            ];
        }else if (model === 'Iphone 6' || model === 'Iphone 6 Plus'){
            $scope.colorNames = [
                {
                    name: 'White'
                }, {
                    name: 'Black'
                }, {
                    name: 'Gold'
                }
            ];
        }else if (model === 'Iphone 6S' || model === 'Iphone 6S Plus' || model === 'Iphone SE'){
            $scope.colorNames = [
                {
                    name: 'White'
                }, {
                    name: 'Black'
                }, {
                    name: 'Gold'
                }, {
                    name: 'Rose Gold'
                }
            ];
        }else if (model === 'Note'){
            $scope.colorNames = [
                {
                    name: 'White'
                }, {
                    name: 'Black'
                }, {
                    name: 'Gold'
                }, {
                    name: 'Blue'
                }
            ];
        }else if (model === 'Note 2'){
            $scope.colorNames = [
                {
                    name: 'White'
                }, {
                    name: 'Black'
                }, {
                    name: 'Gold'
                }, {
                    name: 'Blue'
                }, {
                    name: 'Grey'
                }
            ];
        }else if (model === 'S3'){
            $scope.colorNames = [
                {
                    name: 'White'
                }, {
                    name: 'Blue'
                }, {
                    name: 'Purple'
                }, {
                    name: 'Red'
                }
            ];
        }else if (model === 'S4'){
            $scope.colorNames = [
                {
                    name: 'White'
                }, {
                    name: 'Blue'
                }, {
                    name: 'Blue'
                }, {
                    name: 'Purple'
                }, {
                    name: 'Red'
                }, {
                    name: 'Grey'
                }
            ];
        }else if (model === 'S5'){
            $scope.colorNames = [
                {
                    name: 'White'
                }, {
                    name: 'Blue'
                }, {
                    name: 'Gold'
                }, {
                    name: 'Red'
                }, {
                    name: 'Grey'
                }
            ];
        }else if (model === 'Ipad Mini 2'){
            $scope.colorNames = [
                {
                    name: 'Silver'
                }, {
                    name: 'Space Gray'
                }
            ];
        }else if (model === 'Ipad Mini 3'){
            $scope.colorNames = [
                {
                    name: 'Silver'
                }, {
                    name: 'Gold'
                }, {
                    name: 'Space Gray'
                }
            ];
        }else{
            $scope.colorNames = [
                {
                    name: 'Space Gray'
                }, {
                    name: 'Silver'
                }
            ];
        }

        $scope.colorPick = function(color){
            $sessionStorage['color'] = color;
            $location.path('/issue');
        };
    }]);