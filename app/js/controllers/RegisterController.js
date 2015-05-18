'use strict';

socialNetworkApp.controller('RegisterController',
    function RegisterController($scope, $http, authService) {

        $scope.register = function (userData) {
            authService.register(userData)
                .then(function (data) {
                    sessionStorage.currentUser = JSON.stringify(data);
                    $http.defaults.headers.common.Authorization =
                        'Bearer ' + authService.getCurrentUser().access_token;
                    console.log('Registered.');
                }, function (error) {
                    var errorMsg = error.modelState[Object.keys(error.modelState)[0]][0];
                    console.log(errorMsg);
                })
        }
    });