'use strict';

socialNetworkApp.controller('HomeController',
    function HomeController($scope, authService, postsService, Notification, newsFeed) {

        $scope.newsFeed = newsFeed;

        //if (authService.isLoggedIn()) {
        //        postsService.getNewsFeed()
        //            .then(function (data) {
        //                console.log(data);
        //                $scope.newsFeed = data;
        //            }, function (error) {
        //                console.log(error);
        //            })
        //    }
    });