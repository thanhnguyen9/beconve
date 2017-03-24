angular.module('BeConve')
    .factory('Shop', function($resource) {
        return $resource('/api/v1/shops/:id', { id: '@id' }, {
            update: {method: 'PUT'},
            query: {method: 'GET'},
            get: {method: 'GET'},
            delete: {method: 'DELETE'}
        })
    })

    .factory('Order',['$resource', function($resource) {
        return $resource('/api/v1/checkouts/:id', { id: '@id' }, {
            update: {method: 'PUT'},
            query: {method: 'GET', isArray: true},
            get: {method: 'GET'},
            delete: {method: 'DELETE'}
        })
    }])

    .factory('Price',['$resource', function($resource) {
        return $resource('/api/v1/prices/:id', { id: '@id' }, {
            get: {method: 'GET'},
            update: {method: 'PUT'},
            query: {method: 'GET', isArray: true}
        })
    }])
;