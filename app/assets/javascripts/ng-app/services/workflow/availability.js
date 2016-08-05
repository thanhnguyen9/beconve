angular.module('BeConve').factory('Technician', function($resource) {
    return $resource('/api/v1/technicians/:id'); // Note the full endpoint address
});