'use strict';

var socialNetworkApp = angular
    .module('socialNetworkApp', ['ngRoute', 'angular-loading-bar', 'ui-notification'])
    .constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api')
    .config(function ($routeProvider, cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController',
                resolve: {
                    newsFeed: function (authService, postsService) {
                        if (authService.isLoggedIn()) {
                            return postsService.getNewsFeed();
                        } else {
                            return '';
                        }
                    }
                }
            })
            .when('/test', {
                template: '<div>Test</div>',
                resolve: {
                    isLoggedIn: function ($location, authService) {
                        if (!authService.isLoggedIn()) {
                            $location.path('/');
                        }
                    }
                }
            })
            .when('/profile/password', {
                templateUrl: 'templates/changePasswordForm.html',
                controller: 'ChangePasswordController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });