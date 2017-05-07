angular.module('BeConve')

    .factory('AvailableCities',['$resource', function($resource) {
        return $resource('/api/v1/available_cities/:id', { id: '@id' }, {
            query: {method: 'GET'}
        })
    }])

    .factory('Appointment',['$resource', function($resource) {
        return $resource('/api/v1/appointments/:id', { id: '@id' }, {
            update: {method: 'PUT'},
            query: {method: 'GET'},
            get: {method: 'GET'},
            delete: {method: 'DELETE'}
        })
    }])

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