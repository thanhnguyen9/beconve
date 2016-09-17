angular.module('BeConve')
    .controller('colorController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {

        if (angular.isUndefined($sessionStorage.model.desc) || $sessionStorage.model.desc === ''){
            $location.url('/model');
        }

        var model_desc = $sessionStorage.model.desc;

        if (model_desc === 'iphone 4' || model_desc === 'iphone 4s' || model_desc === 'iphone 5' || model_desc === 'iphone 5c' ||
            model_desc === 'iphone 5s' || model_desc === 'note 3' || model_desc === 'ipad 2' || model_desc === 'ipad 3' || model_desc === 'ipad 4' ||
            model_desc === 'ipad mini'){
            $scope.colorNames = [
                {
                    name: 'White'
                }, {
                    name: 'Black'
                }
            ];
        }else if (model_desc === 'iphone 6' || model_desc === 'iphone 6+'){
            $scope.colorNames = [
                {
                    name: 'White'
                }, {
                    name: 'Black'
                }, {
                    name: 'Gold'
                }
            ];
        }else if (model_desc === 'iphone 6s' || model_desc === 'iphone 6s+' || model_desc === 'iphone se'){
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
        }else if (model_desc === 'note'){
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
        }else if (model_desc === 'note 2'){
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
        }else if (model_desc === 'galaxy s3'){
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
        }else if (model_desc === 'galaxy s4'){
            $scope.colorNames = [
                {
                    name: 'White'
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
        }else if (model_desc === 'galaxy s5'){
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
        }else if (model_desc === 'ipad mini 2'){
            $scope.colorNames = [
                {
                    name: 'Silver'
                }, {
                    name: 'Space Gray'
                }
            ];
        }else if (model_desc === 'ipad mini 3'){
            $scope.colorNames = [
                {
                    name: 'Space Gray'
                }, {
                    name: 'Gold'
                }, {
                    name: 'Silver'
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