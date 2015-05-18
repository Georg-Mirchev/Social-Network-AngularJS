'use strict';

socialNetworkApp.controller('LoginController',
    function LoginController($scope, $location, authService, $http) {

        $scope.login = function (userData) {
            authService.login(userData)
                .then(function (data) {
                    authService.setSessionStorage(data);
                    console.log('Logged in.');
                }, function (error) {
                    console.log(error.error_description);
                })
        }
    });