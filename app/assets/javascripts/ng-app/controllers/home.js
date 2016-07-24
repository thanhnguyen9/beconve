angular.module('BeConve')
    .controller('HomeController', ['$location',  function($location) {
        this.startProcess = function(){
            $location.path('/location');
        }
    }]);