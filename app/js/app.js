'use strict';

var socialNetworkApp = angular
    .module('socialNetworkApp', ['ngRoute', 'angular-loading-bar', 'ui-notification', 'infinite-scroll', 'angularMoment'])
    .constant({
        'BASE_URL': 'http://softuni-social-network.azurewebsites.net/api',
        'PAGE_SIZE': '3'
    })
    .config(function ($routeProvider, cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController',
                resolve: {
                    friendsDataPreview: function (authService, friendsService) {
                        if (authService.isLoggedIn()) {
                            return friendsService.getOwnFriendsPreview();
                        }
                    }
                }
            })
            .when('/users/:username/friends', {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsController',
                resolve: {
                    isLoggedIn: isLoggedIn
                }
            })
            .when('/profile', {
                templateUrl: 'templates/editProfileForm.html',
                controller: 'EditProfileController',
                resolve: {
                    isLoggedIn: isLoggedIn,
                    userData: function (authService, userService) {
                        if (authService.isLoggedIn()){
                            return userService.getDataAboutMe();
                        }
                    }
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