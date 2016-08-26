angular.module('BeConve')
    .controller('bankSetupController', ['$scope', '$location', '$window', 'Auth', 'Technician',
        function($scope, $location, $window, Auth, Technician) {

        Auth.currentUser().then(function(user) {
            var tech = Technician.get({ id: user.id }, function() {
                $scope.stripe_uid = tech.response.stripe_uid;
                $scope.stripe_publishable_key = tech.response.stripe_publishable_key;
                $scope.stripe_publishable_key = tech.response.stripe_publishable_key;
                $scope.stripe_access_code = tech.response.stripe_access_code;

                if($scope.stripe_uid && $scope.stripe_publishable_key && $scope.stripe_publishable_key && $scope.stripe_access_code){
                    $scope.stripe_setup = true
                }else{
                    $scope.stripe_setup = false
                }
            })
        }, function(error) {
            $location.path('/')
        });

        $scope.submit = function(){
            $window.location.href = '/home.html';
        };

    }]);