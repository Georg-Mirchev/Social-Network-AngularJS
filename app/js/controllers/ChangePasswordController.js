'use strict';

socialNetworkApp.controller('ChangePasswordController',
    function ChangePasswordController($scope, $location, userService, Notification) {

        $scope.changePassword = function (userData) {
            userService.changePassword(userData)
                .then(function (data) {
                    Notification.success(data.message);
                    //location profile
                    $location.path('/');
                }, function (error) {
                    var errorMsg = error.modelState[Object.keys(error.modelState)[0]][0];
                    Notification.error(errorMsg);
                })
        }
    });