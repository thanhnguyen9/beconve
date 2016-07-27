var app = angular.module('BeConve');

app.controller('AvailabilityController', ['Map', function(Map) {

    this.place = {};

    this.techs = [
        {
            name: 'CPR Cell Phone Repair Dallas Uptown',
            distance: '3 mile',
            intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec mi a ma',
            responseTime: '2 minutes',

        }, {
            name: 'Cell Tech',
            distance: '4 mile',
            intro: 'Sollicitudin. Aenean auctor consequat mauris, a pharetra elit scele',
            responseTime: '1 minutes',

        },{
            name: 'Cellular Geek',
            distance: '3 mile',
            intro: 'sque ac. Praesent nisi tortor, auctor at rutrum vitae, blandit sit amet ',
            responseTime: '1 minutes',

        }
    ];


    this.search = function() {
        this.apiError = false;
        Map.search(this.searchPlace)
            .then(
                function(res) { // success
                    Map.addMarker(res);
                    this.place.name = res.name;
                    this.place.lat = res.geometry.location.lat();
                    this.place.lng = res.geometry.location.lng();
                },
                function(status) { // error
                    this.apiError = true;
                    this.apiStatus = status;
                }
            );
    }

    this.send = function() {
        alert(this.place.name + ' : ' + this.place.lat + ', ' + this.place.lng);
    }

    Map.init();
}]);
