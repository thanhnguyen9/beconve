angular.module('BeConve').factory('BusinessHours',['$resource', function($resource) {
    return $resource('/api/v1/business_hours/:id', { id: '@id' }, {
        update: {method: 'PUT'},
        query: {method: 'GET'},
        get: {method: 'GET'},
        delete: {method: 'DELETE'}
    })
}]);