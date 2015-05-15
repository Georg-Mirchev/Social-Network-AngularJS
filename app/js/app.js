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
            .otherwise({
                redirectTo: '/'
            });
    });