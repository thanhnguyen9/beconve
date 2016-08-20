angular.module('BeConve')
    .factory('Technician', function($resource) {
        return $resource('/api/v1/technicians/:id', { id: '@_id' }, {
            update: {
                method: 'PUT' // this method issues a PUT request
            }
        });
    });