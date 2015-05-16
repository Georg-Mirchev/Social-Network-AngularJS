'use strict';

socialNetworkApp.controller('AppController',
    function AppController($scope, $location, authService) {
        $scope.authService = authService;

        //$scope.location = $location;
        $scope.logout = function () {
            authService.logout();
            //notification
        }
    });