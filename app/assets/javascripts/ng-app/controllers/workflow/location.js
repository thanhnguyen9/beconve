angular.module('BeConve')
        .controller('LocationController', ['$location', '$sessionStorage', function($location, $sessionStorage) {


            this.next = function(){
                $sessionStorage['location'] = this.location;
                $location.url('/device');
            }
        }]);