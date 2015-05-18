'use strict';

socialNetworkApp.controller('RegisterController',
    function RegisterController($scope, $http, authService) {

        $scope.register = function (userData) {
            authService.register(userData)
                .then(function (data) {
                    authService.setSessionStorage(data);
                    console.log('Registered.');
                }, function (error) {
                    var errorMsg = error.modelState[Object.keys(error.modelState)[0]][0];
                    console.log(errorMsg);
                })
        }
    });