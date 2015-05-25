'use strict';

socialNetworkApp.controller('FriendsController',
    function FriendsController($scope, $routeParams, $location, friendsService, authService, Notification) {

        $scope.getFriends = function () {
            if (authService.getCurrentUser()) {
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
                            $location.path('/users/' + authService.getCurrentUser().userName + '/friends');
                            Notification.error(error.message || 'User not found. You will be redirected to your friends.');
                        })
                }
            }
        };

        $scope.getPreviewFriends = function () {
            friendsService.getOwnFriendsPreview()
                .then(function (data) {
                    $scope.friendsPreviewList = data
                }, function (error) {
                    console.log(error);
                })
        }
    });