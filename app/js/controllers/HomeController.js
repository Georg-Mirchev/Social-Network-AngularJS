'use strict';

socialNetworkApp.controller('HomeController',
    function HomeController($scope, pageSize, postsService) {

        //var lastPostId = '';
        //$scope.posts = [];
        //$scope.postsMessage = 'Loading posts...';
        //
        //$scope.newsFeedPosts = function () {
        //    if ($scope.isScrollPaused) return;
        //    $scope.isScrollPaused = true;
        //
        //    postsService.getPosts(pageSize, lastPostId)
        //        .then(function (data) {
        //            $scope.posts = $scope.posts.concat(data);
        //            if (data.length > 0) {
        //                $scope.isScrollPaused = false;
        //                lastPostId = data[data.length - 1].id;
        //            } else {
        //                $scope.isScrollPaused = true;
        //                $scope.postsMessage = 'No more posts.';
        //            }
        //        }, function (error) {
        //            console.log(error.message);
        //        })
        //};
        //
        //$scope.dateFromNow = function (date) {
        //    return moment(date).add(3, 'hours').fromNow();
        //}
    });