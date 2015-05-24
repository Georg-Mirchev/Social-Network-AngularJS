'use strict';

socialNetworkApp.controller('RegisterController',
    function RegisterController($scope, $http, authService, Notification, $route) {

        $scope.register = function (userData) {
            authService.register(userData)
                .then(function (data) {
                    authService.setCredentials(data);
                    Notification.success('Successfully registered!');
                    $route.reload();
                }, function (error) {
                    var errorMsg = error.modelState[Object.keys(error.modelState)[0]][0];
                    Notification.error(errorMsg);
                })
        }
    });