'use strict';

socialNetworkApp.controller('LogoutController',
    function LogoutController($scope, $http, $location, authService, Notification) {

        $scope.logout = function () {
            authService.logout()
                .then(function (data) {
                    delete $http.defaults.headers.common.Authorization;
                    delete sessionStorage.currentUser;
                    Notification.success(data.message);
                }, function (error) {
                    Notification.error(error.message);
                })
        }
    });