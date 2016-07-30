angular
    .module('BeConve', [
        'ngRoute',
        'ngStorage',
        'ngMessages',
        'ngAutocomplete',
        'uiGmapgoogle-maps',
        'templates'
    ])
    .config(['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider', function ($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeController'
        })
        .when('/location', {
            templateUrl: 'workflow/location.html',
            controller: 'locationController'
        })
        .when('/device', {
            templateUrl: 'workflow/device.html',
            controller: 'deviceController'
        }).when('/availability', {
        templateUrl: 'workflow/availability.html',
        controller: 'availabilityController'
    });

    uiGmapGoogleMapApiProvider.configure({
        china: true
    });

    uiGmapGoogleMapApiProvider.configure({
        key: 'my-api-key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
}]);