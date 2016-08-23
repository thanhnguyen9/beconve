angular.module('BeConve')
    .controller('profileController', ['$scope', '$location', 'Technician', 'Auth',
        function($scope, $location, Technician, Auth) {

        Auth.currentUser().then(function(user) {

            var tech = Technician.get({ id: user.id }, function() {
                $scope.name = tech.response.name;
                $scope.address = tech.response.address;
                $scope.warranty = tech.response.warranty;
                $scope.image = tech.response.image;
            });

            $scope.submit = function(){
                //Let's first get the user and then update it.
                tech.user = {};
                tech.user.name = $scope.name;
                tech.user.address = $scope.address;
                tech.user.warranty = $scope.warranty;
                tech.user.image = $scope.image;

                tech.$update({id: Auth._currentUser.id}, function(res){
                    if(res.status === 'success'){
                        $scope.info = 'You have successfully save your profile'
                    }else{
                        $scope.info = 'Something went wrong. Please try again'
                    }
                });
            };

        }, function(error) {
            $location.path('/')
        });

    }]);