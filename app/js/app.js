'use strict';

var socialNetworkApp = angular
    .module('socialNetworkApp', ['ngRoute', 'angular-loading-bar', 'ui-notification', 'infinite-scroll', 'angularMoment'])
    .constant({
        'baseServiceUrl': 'http://softuni-social-network.azurewebsites.net/api',
        'pageSize': '3'
    })
    .config(function ($routeProvider, cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .when('/profile', {
                templateUrl: 'templates/editProfileForm.html',
                controller: 'EditProfileController',
                resolve: {
                    isLoggedIn: isLoggedIn
                }
            })
            .when('/profile/password', {
                templateUrl: 'templates/changePasswordForm.html',
                controller: 'ChangePasswordController',
                resolve: {
                    isLoggedIn: isLoggedIn
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    });

var isLoggedIn = function ($location, authService, Notification) {
    if (!authService.isLoggedIn()) {
        $location.path('/');
        Notification.info("You don't have access here.");
    }
};