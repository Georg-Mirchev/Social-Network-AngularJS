'use strict';

socialNetworkApp.controller('LoginController',
    function LoginController($scope, $location, authService, Notification, $route) {

        $scope.login = function (userData) {
            authService.login(userData)
                .then(function (data) {
                    authService.setCredentials(data);
                    Notification.success('Successfully logged in!');
                    $route.reload();
                }, function (error) {
                    Notification.error(error.error_description);
                })
        }
    });