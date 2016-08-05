angular.module('BeConve')
    .controller('issueController', ['$scope', '$location', '$sessionStorage', function($scope, $location, $sessionStorage) {

        $scope.issueNames = [
            {
                name: 'Broken Screen'
            }, {
                name: 'Faulty Battery'
            }, {
                name: "Won't turn on"
            }, {
                name: "Liquid Damage"
            }
        ];

        $scope.issuePick = function(issue){
            $sessionStorage['issue'] = issue;
            $location.url('/availability');
        };

    }]);