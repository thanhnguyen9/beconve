angular.module('BeConve')
    .factory('AvailableTechnicians',['$resource', function($resource) {
        return $resource('/api/v1/technicians', {}, {
            query: {method: 'GET', isArray: true}
        })
    }]);