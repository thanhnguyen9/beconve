angular.module('BeConve').factory('ShopPictures',['$resource', function($resource) {
    return $resource('/api/v1/user_images/:id', { id: '@id' }, {
        update: {method: 'PUT'},
        query: {method: 'GET'},
        get: {method: 'GET'},
        delete: {method: 'DELETE'}
    })
}]);