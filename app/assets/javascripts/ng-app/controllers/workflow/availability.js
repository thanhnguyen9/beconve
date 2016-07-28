angular
    .module('BeConve')

    .controller('AvailabilityController', ['$scope', function($scope) {

        $scope.techs = [
            {
                name: 'CPR Cell Phone Repair Dallas Uptown',
                distance: '3 mile',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec mi a ma',
                responseTime: '2 minutes',
                rating: '4.5'
            }, {
                name: 'Cell Tech',
                distance: '4 mile',
                intro: 'Sollicitudin. Aenean auctor consequat mauris, a pharetra elit scele',
                responseTime: '1 minutes',
                rating: '4.8'
            },{
                name: 'Cellular Geek',
                distance: '3 mile',
                intro: 'sque ac. Praesent nisi tortor, auctor at rutrum vitae, blandit sit amet ',
                responseTime: '1 minutes',
                rating: '4.9'
            }
        ];

        $scope.map = {
            center: {
                latitude: 39.5925511,
                longitude: 2.633202
            },
            zoom: 14,
            markers: [{
                id: 1,
                latitude: 39.5924115,
                longitude: 2.6468146

            }, {
                id: 2,
                latitude: 39.5925511,
                longitude: 2.633202
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

}]);
