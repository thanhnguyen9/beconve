angular
    .module('BeConve')

    .controller('availabilityController', ['$scope', '$sessionStorage', '$location', 'Technician',
        function($scope, $sessionStorage, $location, Technician) {

            if (angular.isUndefined($sessionStorage.issue) || $sessionStorage.issue === ''){
                $location.url('/issue');
            }

            var techs = Technician.query(function() {
                $scope.techs = techs;
            });

            $scope.techs = [
                {
                    id: 1,
                    name: 'CPR Cell Phone Repair Dallas Uptown',
                    warranty: '1 month',
                    distance: '3 mile',
                    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec mi a ma',
                    price: '110',
                    responseTime: '2 minutes',
                    rating: '4.5',
                    images: 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/cell-phone-repair-tx-dallas-uptown.jpg'
                }, {
                    id: 2,
                    name: 'Cell Tech',
                    warranty: '1 month',
                    distance: '4 mile',
                    intro: 'Sollicitudin. Aenean auctor consequat mauris, a pharetra elit scele',
                    responseTime: '1 minutes',
                    rating: '4.8',
                    images: 'http://files.hgsitebuilder.com/hostgator260927/image/cellphonefront1.jpg',
                    price: '110'
                },{
                    id: 3,
                    name: 'Cellular Geek',
                    warranty: '1 month',
                    price: '110',
                    distance: '3 mile',
                    intro: 'sque ac. Praesent nisi tortor, auctor at rutrum vitae, blandit sit amet ',
                    responseTime: '1 minutes',
                    rating: '4.9',
                    images: 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/cell-phone-repair-tx-dallas-uptown.jpg'

                },{
                    id: 4,
                    name: 'Best fix',
                    warranty: '1 month',
                    price: '110',
                    distance: '3 mile',
                    intro: 'sque ac. Praesent nisi tortor, auctor at rutrum vitae, blandit sit amet ',
                    responseTime: '1 minutes',
                    rating: '4.9',
                    images: 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/cell-phone-repair-tx-dallas-uptown.jpg'

                },{
                    id: 5,
                    name: 'Repair for you',
                    warranty: '1 month',
                    price: '110',
                    distance: '3 mile',
                    intro: 'sque ac. Praesent nisi tortor, auctor at rutrum vitae, blandit sit amet ',
                    responseTime: '1 minutes',
                    rating: '4.9',
                    images: 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/cell-phone-repair-tx-dallas-uptown.jpg'

                },{
                    id: 6,
                    name: 'Geek fix',
                    warranty: '1 month',
                    distance: '3 mile',
                    price: '110',
                    intro: 'sque ac. Praesent nisi tortor, auctor at rutrum vitae, blandit sit amet ',
                    responseTime: '1 minutes',
                    rating: '4.9',
                    images: 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/cell-phone-repair-tx-dallas-uptown.jpg'

                }
            ];

            $scope.map = {
                center: {
                    latitude: 32.7767,
                    longitude: -96.7970
                },
                zoom: 14,
                markers: [{
                    id: 1,
                    latitude: 32.783585,
                    longitude: -96.805077

                }, {
                    id: 2,
                    latitude: 32.771290,
                    longitude: -96.798966
                }],

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

            $scope.pick = function(techId, techName){
                $sessionStorage['techId'] = techId;
                $sessionStorage['techName'] = techName;
                $sessionStorage['name'] = 'Geek fix';
                $sessionStorage['price'] = '110';
                $sessionStorage['warranty'] = '3 months';

                $location.path('/reservation');
            }
}]);
