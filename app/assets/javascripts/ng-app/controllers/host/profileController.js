angular.module('BeConve')
    .controller('profileController', ['$scope', '$location', 'Shop', 'Auth', '$http',
        function($scope, $location, Shop, Auth, $http) {

        Auth.currentUser().then(function(user) {

            var tech = Shop.get({ id: user.id }, function() {
                $scope.name = tech.response.name;
                $scope.phone = tech.response.phone;
                $scope.rating = tech.response.rating;
                $scope.reviews = tech.response.reviews;
                $scope.reviews_link = tech.response.reviews_link;
                $scope.address = tech.response.address;
                $scope.warranty = tech.response.warranty;
                $scope.image = tech.response.image;
            });

            $scope.submit = function(){
                //Let's first get the user and then update it.
                tech.user = {};
                tech.user.name = $scope.name;
                tech.user.phone = $scope.phone;
                tech.user.rating = $scope.rating;
                tech.user.reviews = $scope.reviews;
                tech.user.reviews_link = $scope.reviews_link;
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

                //var geocoder = new google.maps.Geocoder();
                //geocoder.geocode( { "address": $scope.address }, function(results, status) {
                //    if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                //        var location = results[0].geometry.location,
                //            lat      = location.lat(),
                //            lng      = location.lng();
                //
                //        latitude=lat;
                //        longitude=lng;
                //        var latlng = {lat: parseFloat(latitude), lng: parseFloat(longitude)};
                //
                //        geocoder.geocode({'location': latlng}, function(results, status) {
                //            if (status === google.maps.GeocoderStatus.OK) {
                //
                //                if (results[0]) {
                //                    console.log(results[0].place_id);
                //                } else {
                //                    console.log('No results found');
                //                }
                //            } else {
                //                console.log('Geocoder failed due to: ' + status);
                //            }
                //        });
                //    }
                //});


            };

        }, function(error) {
            $location.path('/')
        });

    }]);