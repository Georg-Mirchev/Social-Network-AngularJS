'use strict';

socialNetworkApp.controller('LoginController',
    function LoginController($scope, $location, authService, $http) {

        $scope.login = function (userData) {
            authService.login(userData)
                .then(function (data) {
                    sessionStorage.currentUser = JSON.stringify(data);
                    $http.defaults.headers.common.Authorization =
                        'Bearer ' + authService.getCurrentUser().access_token;
                    console.log('Logged in.');
                }, function (error) {
                    console.log(error.error_description);
                })
        }
    });