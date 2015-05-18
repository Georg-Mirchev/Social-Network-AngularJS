'use strict';

socialNetworkApp.controller('AppController',
    function AppController($scope, $http, authService) {
        $scope.authService = authService;

        //set headers after refresh
        if (sessionStorage.currentUser != undefined) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + authService.getCurrentUser().access_token;
        }
    });