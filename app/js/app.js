'use strict';

var socialNetworkApp = angular
    .module('socialNetworkApp', ['ngRoute', 'angular-loading-bar', 'ui-notification'])
    .constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api')
    .config(function ($routeProvider, cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
                ,
                resolve: {
                    //newsFeed: function (authService, postsService) {
                    //    if (authService.isLoggedIn()) {
                    //        postsService.getNewsFeed()
                    //            .then(function (data) {
                    //                console.log(data);
                    //                return data;
                    //            });
                    //    }
                    //}
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
            //.when('/logout', {
            //    template: '<button ng-click="logout()">Out</button>',
            //    controller: 'LogoutController'
            //})
            .when('/profile/password', {
                templateUrl: 'templates/changePasswordForm.html',
                controller: 'ChangePasswordController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
//.run(function ($rootScope, $location, authService) {
//    $rootScope.$on('$locationChangeStart', function () {
//        if ($location.path().indexOf('/') != -1 && !authService.isLoggedIn()) {
//            $location.path('/');
//        }
//    });
//});