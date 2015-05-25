'use strict';

socialNetworkApp.controller('AppController',
    function AppController($scope, $http, $route, authService, $location) {
        $scope.authService = authService;

        $scope.routeReload = function () {
            $location.path('/');
            $route.reload();
        };

        //set headers after refresh
        if (sessionStorage.currentUser != undefined) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + authService.getCurrentUser().access_token;
        }


    });