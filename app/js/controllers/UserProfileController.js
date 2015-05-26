'use strict';

socialNetworkApp.controller('UserProfileController',
    function UserProfileController($scope, $routeParams, PAGE_SIZE, userService, authService, getUserFullData) {

        $scope.userFullData = getUserFullData;
    });