'use strict';

socialNetworkApp.controller('RegisterController',
    function RegisterController($scope, $location, authService) {

        $scope.register = function (userData) {
            authService.register(userData,
                function success(data) {
                    sessionStorage.currentUser = JSON.stringify(data);
                    console.log('Register.');
                },
                function error(error) {
                    var errorMsg = error.modelState[Object.keys(error.modelState)[0]][0];
                    console.log(errorMsg);
                }
            );
        }
    });