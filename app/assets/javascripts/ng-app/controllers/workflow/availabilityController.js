angular
    .module('BeConve')

    .controller('availabilityController', ['$scope', '$sessionStorage', '$location', 'Shop', '$http',
        function($scope, $sessionStorage, $location, Shop, $http) {


            $scope.loading = true;

            Shop.query({'location':$sessionStorage.location}, function(res){

                if(res.status === 'success'){

                    $scope.shops = res.response;

                    if ($scope.shops.length > 0){
                        var arr = [];
                        for( i = 0; i < $scope.shops.length; i++){
                            arr.push({
                                id: $scope.shops[i].id,
                                shop: $scope.shops[i],
                                latitude: $scope.shops[i].latitude,
                                longitude: $scope.shops[i].longitude
                            });
                        }

                        $scope.center = {
                            latitude: $scope.shops[0].longitude,
                            longitude: $scope.shops[0].latitude
                        };

                        $scope.map.markers = arr;
                    }else{
                        $scope.notAvailable = true;
                    }
                }else{
                    $scope.error = 'Something went wrong. Please refresh the page'
                }
                $scope.loading = false;
            });

            $scope.map = {
                center: {
                    latitude: 33.1972,
                    longitude: -96.6398
                },
                zoom: 12,
                markers: null,

                markersEvents: {
                    click: function(marker, eventName, model) {
                        console.log('Click marker');
                        $scope.map.window.model = model;
                        $scope.map.window.show = true;
                    }
                },
                window: {
                    marker: {},
                    show: false,
                    closeClick: function() {
                        this.show = false;
                    },
                    options: {}
                }
            };

            $scope.pick = function(shopId){
                $sessionStorage['shopId'] = shopId;

                $location.path('/shops/' + shopId);
            };
        }])
    .controller('templateController',[ '$scope', '$http', '$sessionStorage', '$location', function($scope, $http, $sessionStorage, $location){

        $scope.pick = function(shopId){
            $sessionStorage['shopId'] = shopId;

            $location.path('/shops/' + shopId);
        };
    }])
;
