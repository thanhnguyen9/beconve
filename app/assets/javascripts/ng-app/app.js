angular
    .module('BeConve', [
        'ngRoute',
        'ngStorage',
        'ngMessages',
        'ngAutocomplete',
        'uiGmapgoogle-maps',
        'templates',
        'Devise'
    ])
    .config(['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider', '$httpProvider', 'AuthProvider', 'AuthInterceptProvider',
        function ($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider, $httpProvider, AuthProvider, AuthInterceptProvider) {

        $httpProvider.defaults.withCredentials = true;
        AuthInterceptProvider.interceptAuth(true);
        AuthProvider.resourceName('customer');
        AuthProvider.loginPath('/customers/sign_in.json');
        AuthProvider.logoutPath('/customers/sign_out.json');
        AuthProvider.registerPath('/customers.json');

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
            console.log(user);
            console.log(Auth._currentUser);
        });
    }]);