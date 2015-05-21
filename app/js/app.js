'use strict';

var socialNetworkApp = angular
    .module('socialNetworkApp', ['ngRoute', 'angular-loading-bar', 'ui-notification', 'infinite-scroll', 'angularMoment'])
    .constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api')
    .config(function ($routeProvider, cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .when('/profile/password', {
                templateUrl: 'templates/changePasswordForm.html',
                controller: 'ChangePasswordController',
                resolve: {
                    isLoggedIn: function ($location, authService) {
                        if (!authService.isLoggedIn()) {
                            $location.path('/');
                        }
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    })