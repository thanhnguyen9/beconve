angular
    .module('BeConve', [
        'ngRoute',
        'ngStorage',
        'ngMessages',
        'ngAutocomplete',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
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
        });
});