'use strict';

socialNetworkApp.controller('RegisterController',
    function RegisterController($scope, $http, authService, Notification) {

        $scope.register = function (userData) {
            authService.register(userData)
                .then(function (data) {
                    authService.setSessionStorage(data);
                    Notification.success('Successfully registered!');
                }, function (error) {
                    var errorMsg = error.modelState[Object.keys(error.modelState)[0]][0];
                    Notification.error(errorMsg);
                })
        }
    });