'use strict';

socialNetworkApp.controller('HomeController',
    function HomeController($scope, friendsDataPreview, authService) {

        $scope.isFriend = true;
        $scope.friendsPreviewList = friendsDataPreview;

        if (authService.isLoggedIn()) {
            $scope.friendsPreviewList.friendsUrl = '#/users/' +
                authService.getCurrentUser().userName + '/friends';
        }
    });