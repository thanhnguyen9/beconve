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
        'angularPayments',
        'ui.bootstrap',
        'ngFileUpload'
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
                .when('/shops/:id', {
                    templateUrl: 'workflow/shop_detail.html'
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
                .when('/business_hour', {
                    templateUrl: 'host/business_hours.html',
                    controller: 'businessHoursController'
                })
                .when('/pictures', {
                    templateUrl: 'host/pictures/index.html',
                    controller: 'picturesController'
                })
                .when('/pictures/:id', {
                    templateUrl: 'host/pictures/edit.html',
                    controller: 'picturesEditController'
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
