'use strict';

socialNetworkApp.controller('LogoutController',
    function LogoutController($scope, $http, $location, authService) {

        $scope.logout = function () {
            authService.logout()
                .then(function (data) {
                    delete $http.defaults.headers.common.Authorization;
                    delete sessionStorage.currentUser;
                    console.log(data.message);
                }, function (error) {
                    console.log(error.message);
                })
        }
    });