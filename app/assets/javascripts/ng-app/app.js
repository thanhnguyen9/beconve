angular
    .module('BeConve', [
        'ngRoute',
        'ngStorage',
        'ngMessages',
        'ngAutocomplete',
        'uiGmapgoogle-maps',
        'templates',
        'Devise',
        'ngResource'
    ])
    .config(['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider', '$httpProvider', 'AuthProvider', 'AuthInterceptProvider',
        function ($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider, $httpProvider, AuthProvider, AuthInterceptProvider) {

        $httpProvider.defaults.withCredentials = true;
        AuthInterceptProvider.interceptAuth(true);
        AuthProvider.resourceName('users');
        AuthProvider.loginPath('/users/sign_in.json');
        AuthProvider.logoutPath('/users/sign_out.json');
        AuthProvider.registerPath('/users.json');

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
            })
            .when('/model', {
                templateUrl: 'workflow/model.html',
                controller: 'modelController'
            })
            .when('/color', {
                templateUrl: 'workflow/color.html',
                controller: 'colorController'
            })
            .when('/issue', {
                templateUrl: 'workflow/issue.html',
                controller: 'issueController'
            })
            .when('/availability', {
                templateUrl: 'workflow/availability.html',
                controller: 'availabilityController'
            })
            .when('/reservation', {
            templateUrl: 'workflow/reservation.html',
            controller: 'reservationController'
            })
            .when('/thank_you', {
            templateUrl: 'workflow/thank_you.html',
            controller: 'thankYouController'
            })
            .when('/bank_setup', {
                templateUrl: 'host/bank_setup.html',
                controller: 'bankSetupController'
            })
            .when('/price_setup', {
                templateUrl: 'host/price_setup.html',
                controller: 'priceSetupController'
            });

        uiGmapGoogleMapApiProvider.configure({
            china: true
        });

        uiGmapGoogleMapApiProvider.configure({
            key: 'my-api-key',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        })
    }])

    .run(['Auth', function (Auth) {
        Auth.currentUser().then(function(user) {
            console.log(Auth._currentUser);
        }, function(error) {
            // unauthenticated error
            console.log("not auth")
        });
    }]);