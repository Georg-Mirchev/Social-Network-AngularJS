'use strict';

socialNetworkApp.controller('LogoutController',
    function LogoutController($scope, $location, authService, Notification, $route) {

        $scope.logout = function () {
            authService.logout()
                .then(function (data) {
                    authService.clearCredentials();
                    Notification.success(data.message);
                    $location.path('/');
                    $route.reload();
                }, function (error) {
                    Notification.error(error.message);
                })
        }
    });