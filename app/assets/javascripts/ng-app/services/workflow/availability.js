angular.module('BeConve')
    .factory('Technician',['$resource', function($resource) {
        return $resource('/api/v1/technicians/:id', { id: '@id' }, {
            update: {method: 'PUT'},
            query: {method: 'GET', isArray: true},
            get: {method: 'GET'},
            delete: {method: 'DELETE'}
        })
    }]);