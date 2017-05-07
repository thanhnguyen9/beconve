angular.module('BeConve')
    .factory('Shop',['$resource', function($resource) {
    return $resource('/api/v1/shops/:id', { id: '@id' }, {
        update: {method: 'PUT'},
        query: {method: 'GET'},
        get: {method: 'GET'},
        delete: {method: 'DELETE'}
    })
}]);