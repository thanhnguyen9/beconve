angular
    .module('BeConve')

    .controller('availabilityController', ['$scope', '$sessionStorage', '$location', 'Technician', '$http',
        function($scope, $sessionStorage, $location, Technician, $http) {

            if (angular.isUndefined($sessionStorage.issue) || $sessionStorage.issue === ''){
                $location.url('/issue');
            }

            Technician.query({'address':$sessionStorage.location}, function(res){

                if(res.status === 'success'){
                    $scope.techs = res.users;

                    if ($scope.techs.length > 0){
                        var arr = [];
                        for( i = 0; i < $scope.techs.length; i++){
                            arr.push({
                                id: $scope.techs[i].id,
                                tech: $scope.techs[i],
                                latitude: $scope.techs[i].latitude,
                                longitude: $scope.techs[i].longitude
                            });
                        }
                        $scope.map.center = {
                            latitude: res.customer_lat_log[0],
                            longitude: res.customer_lat_log[1]
                        };

                        $scope.map.markers = arr;
                    }else{
                        $scope.notAvailable = true;
                    }
                }

            });

            $scope.map = {
                center: {
                    latitude: 32.7767,
                    longitude: -96.7970
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

            $scope.pick = function(techId, techName, warranty){
                $sessionStorage['techId'] = techId;
                $sessionStorage['techName'] = techName;
                $sessionStorage['price'] = '110';
                $sessionStorage['warranty'] = warranty;

                $location.path('/reservation');
            }
        }])
    .controller('templateController',[ '$scope', '$http', '$sessionStorage', '$location', function($scope, $http, $sessionStorage, $location){

        $scope.pick = function(techId, techName, price, warranty){
            $sessionStorage['techId'] = techId;
            $sessionStorage['techName'] = techName;
            $sessionStorage['price'] = price;
            $sessionStorage['warranty'] = warranty;

            $location.path('/reservation');
        };
    }])
;
