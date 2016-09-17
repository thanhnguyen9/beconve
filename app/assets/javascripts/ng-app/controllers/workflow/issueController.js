angular.module('BeConve')
    .controller('issueController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {

        if (angular.isUndefined($sessionStorage.color) || $sessionStorage.color === ''){
            $location.url('/color');
        }

        $scope.issueNames = [
            {
                name: 'Broken Screen',
                desc: 'broken screen'
            }, {
                name: 'Faulty Battery',
                desc: 'faulty battery'
            }, {
                name: "Won't turn on",
                desc: 'not on'
            }, {
                name: "Liquid Damage",
                desc: 'liquid damage'
            }
        ];

        $scope.issuePick = function(issue){
            $sessionStorage['issue'] = issue;
            $location.url('/availability');
        };

    }]);