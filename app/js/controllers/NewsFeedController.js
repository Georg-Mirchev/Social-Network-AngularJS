'use strict';

socialNetworkApp.controller('NewsFeedController',
    function NewsFeedController($scope, authService, postsService) {

        if (authService.isLoggedIn()) {
            postsService.getNewsFeed()
                .then(function (data) {
                    console.log(data);
                    $scope.newsFeed = data;
                }, function (error) {
                    console.log(error);
                })
        }
    });