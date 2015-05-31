'use strict';

socialNetworkApp.controller('HoverController',
    function HoverController($scope, userService) {

        $scope.hoverBox = function (username) {
            userService.getUserPreviewData(username)
                .then(function (data) {
                    $scope.userPreviewData = data;
                    setTimeout(function () {
                        $scope.userPreviewData = '';
                    }, 5000);
                }, function (error) {
                    console.log(error);
                })
        };
    });