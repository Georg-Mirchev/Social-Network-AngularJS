'use strict';

var socialNetworkApp = angular
    .module('socialNetworkApp', ['ngRoute'])
    .constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .when('/test', {
                template: '<div>Test</div>'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function ($rootScope, $location, authService) {
        $rootScope.$on('$locationChangeStart', function () {
            if ($location.path().indexOf('/') != -1 && !authService.isLoggedIn()) {
                $location.path('/');
            }
        });
    });