'use strict';

socialNetworkApp.controller('LoginController',
    function LoginController($scope, $location, authService, Notification) {

        $scope.login = function (userData) {
            authService.login(userData)
                .then(function (data) {
                    authService.setSessionStorage(data);
                    Notification.success('Successfully logged in!');
                }, function (error) {
                    Notification.error(error.error_description);
                })
        }
    });