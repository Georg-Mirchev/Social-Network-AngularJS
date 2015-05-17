'use strict';

socialNetworkApp.controller('LogoutController',
    function LogoutController($scope, authService) {

        $scope.logout = function () {
            authService.logout(
                function success(data) {
                    delete sessionStorage.currentUser;
                    console.log(data.message);
                }, function error(error) {
                    console.log(error.message);
                })
        }
    });