'use strict';

socialNetworkApp.controller('FriendsController',
    function FriendsController($scope, $routeParams, $location, friendsService, authService, Notification, userService) {

        $scope.getFriends = function () {
                if ($routeParams.username == authService.getCurrentUser().userName) {
                    friendsService.getAllMyFriends()
                        .then(function (data) {
                            $scope.friendsList = data;
                        }, function (error) {
                            Notification.error(error.message);
                        })
                }
                else {
                    friendsService.getAllUserFriends($routeParams.username)
                        .then(function (data) {
                            $scope.friendsList = data;
                        }, function (error) {
                            $location.path('/users/' + $routeParams.username);
                            Notification.error(error.message || 'User not found. You will be redirected to your friends.');
                        })
                }
        };

        $scope.getFriendsPreview = function () {
                if ($routeParams.username == authService.getCurrentUser().userName) {
                    friendsService.getOwnFriendsPreview()
                        .then(function (data) {
                            data.friendsUrl = '#/users/' + authService.getCurrentUser().userName + '/friends';
                            $scope.friendsPreviewList = data
                        }, function (error) {
                            Notification.error(error.message);
                        })
                }
                else {
                    friendsService.getUserFriendsPreview($routeParams.username)
                        .then(function (data) {
                            data.friendsUrl = '#/users/' + $routeParams.username + '/friends/';
                            $scope.friendsPreviewList = data;
                        }, function (error) {
                            Notification.error(error.message || 'User not found. You will be redirected to your wall.');
                        })
                }
            };
    });