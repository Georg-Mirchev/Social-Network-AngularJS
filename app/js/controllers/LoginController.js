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
        }
    });