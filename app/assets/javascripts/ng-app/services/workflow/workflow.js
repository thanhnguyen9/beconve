var module = angular.module('BeConve', []);

module.service('Workflow', function(){

    this.get = function(prop){
        $sessionStorage[prop]
    };

    this.set = function(prop, value){
        $sessionStorage[prop] = value;
    }
});