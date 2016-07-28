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
            templateUrl: '/assets/ng-app/templates/home.html',
            controller: 'HomeController'
        })
        .when('/location', {
            templateUrl: '/assets/ng-app/templates/workflow/location.html',
            controller: 'LocationController'
        })
        .when('/device', {
            templateUrl: '/assets/ng-app/templates/workflow/device.html',
            controller: 'deviceController'
        }).when('/availability', {
        templateUrl: '/assets/ng-app/templates/workflow/availability.html',
        controller: 'AvailabilityController'
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