'use strict';

socialNetworkApp.controller('UserProfileController',
    function UserProfileController($scope, $routeParams, PAGE_SIZE, userService, authService, getUserFullData) {

        $scope.userFullData = getUserFullData;
        if ($scope.userFullData) {
            $scope.isFriend = $scope.userFullData.isFriend;
        }
        if ($scope.userFullData.username == authService.getCurrentUser().userName) {
            $scope.isFriend = true;
        }
    });