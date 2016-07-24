angular
    .module('BeConve', [
        'ngRoute',
        'ngStorage',
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
        });
});