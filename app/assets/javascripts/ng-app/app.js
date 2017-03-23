'use strict';

angular
    .module('BeConve', [
        'ngRoute',
        'ngStorage',
        'ngMessages',
        'ngAutocomplete',
        'uiGmapgoogle-maps',
        'templates',
        'Devise',
        'ngResource',
        'angularPayments'
    ])
    .config([
            '$routeProvider',
            '$locationProvider',
            'uiGmapGoogleMapApiProvider',
            '$httpProvider',
            'AuthProvider',
            'AuthInterceptProvider',
            '$windowProvider',
        function ($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider, $httpProvider, AuthProvider, AuthInterceptProvider, $windowProvider) {

        var $window = $windowProvider.$get();
        $window.Stripe.setPublishableKey('pk_test_8kPHFFUZjXxX2TmqALPXWpM4');

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
            .when('/profile', {
                templateUrl: 'host/profile.html',
                controller: 'profileController'
            })
            .when('/bank_setup', {
                templateUrl: 'host/bank_setup.html',
                controller: 'bankSetupController'
            })
            .when('/iphone_price_setup', {
                templateUrl: 'host/iphone_price_setup.html',
                controller: 'iphonePriceSetupController'
            })
            .when('/ipad_price_setup', {
                templateUrl: 'host/ipad_price_setup.html',
                controller: 'ipadPriceSetupController'
            })
            .when('/samsung_price_setup', {
                templateUrl: 'host/samsung_price_setup.html',
                controller: 'samsungPriceSetupController'
            })
            .when('/host_services', {
                templateUrl: 'host/services.html',
                controller: 'hostServicesController'
            })
            .when('/repair_requests', {
                templateUrl: 'host/repair_requests.html',
                controller: 'repairRequestsController'
            })
            .when('/complete_request', {
                templateUrl: 'host/complete_request.html',
                controller: 'completeRequestController'
            })
        ;

        uiGmapGoogleMapApiProvider.configure({
            china: true
        });

        uiGmapGoogleMapApiProvider.configure({
            key: 'my-api-key',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        })

    }]);

    //.run(['Auth', function (Auth) {
    //    Auth.currentUser().then(function(user) {
    //        console.log(Auth._currentUser);
    //    }, function(error) {
    //        // unauthenticated error
    //        console.log("not auth")
    //    });
    //}]);
