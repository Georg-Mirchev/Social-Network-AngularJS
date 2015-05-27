'use strict';

socialNetworkApp.controller('AppController',
    function AppController($scope, $http, $route, $location, authService, userService) {
        $scope.authService = authService;

        $scope.routeReload = function () {
            $location.$$path == '/' ? $route.reload() : $location.path('/');
        };

        //set headers after refresh
        if (sessionStorage.currentUser != undefined) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + authService.getCurrentUser().access_token;
        }

        $scope.hoverBox = function (username) {
            setTimeout(function () {
                userService.getUserPreviewData(username)
                    .then(function (data) {
                        $scope.userPreviewData = data;
                        setTimeout(function () {
                            $scope.userPreviewData = '';
                        }, 500);
                    }, function (error) {
                        console.log(error);
                    })
            }, 1000)
        };
    });