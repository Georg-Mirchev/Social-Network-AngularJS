'use strict';

socialNetworkApp.controller('UserProfileController',
    function UserProfileController($scope, authService, getUserFullData) {

        $scope.userFullData = getUserFullData;
        if ($scope.userFullData) {
            $scope.isFriend = $scope.userFullData.isFriend;
        }
        if ($scope.userFullData.username == authService.getCurrentUser().userName) {
            $scope.isFriend = true;
        }
    });