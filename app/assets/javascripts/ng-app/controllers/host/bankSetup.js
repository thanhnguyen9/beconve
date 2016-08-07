angular.module('BeConve')
    .controller('settingController', ['$scope', '$location', '$window', function($scope, $location, $window) {

        $scope.submit = function(){
            $window.location.href = '/home.html';
        };

    }]);