angular.module('BeConve')
    .factory('Technician', function($resource) {
        return $resource('/api/v1/technicians/:id', { id: '@id' }, {
            update: {method: 'PUT'},
            query: {method: 'GET', isArray: true},
            get: {method: 'GET'},
            delete: {method: 'DELETE'}
        })
    });