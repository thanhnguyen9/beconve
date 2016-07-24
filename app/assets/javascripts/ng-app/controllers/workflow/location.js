angular.module('BeConve')
        .controller('LocationController', ['$location', 'Workflow', function($location, Workflow) {

            this.next = function(){
                Workflow.set('location', this.location);
                $location.url('/device');
            }
        }]);