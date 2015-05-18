'use strict';

socialNetworkApp.controller('LoginController',
    function LoginController($scope, $location, authService) {

        $scope.login = function (userData) {
            authService.login(userData,
                function success(data) {
                    sessionStorage.currentUser = JSON.stringify(data);
                    console.log('Login.');
                },
                function error(error) {
                    console.log(error.error_description);
                }
            );
        };

        $scope.loginWithQ = function (userData) {
            authService.loginWithQ(userData)
                .then(function (data) {
                    sessionStorage.currentUser = JSON.stringify(data);
                    console.log('Logged in with Q!');
                }, function (error) {
                    console.log(error.error_description);
                })
        }
    });