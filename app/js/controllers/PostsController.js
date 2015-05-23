'use strict';

socialNetworkApp.controller('PostsController',
    function PostsController($scope, pageSize, postsService, Notification) {

        var lastPostId = '';
        $scope.posts = [];
        $scope.postsMessage = 'Loading posts...';

        $scope.newsFeedPosts = function () {
            if ($scope.isScrollPaused) return;
            $scope.isScrollPaused = true;

            postsService.getPosts(pageSize, lastPostId)
                .then(function (data) {
                    $scope.posts = $scope.posts.concat(data);
                    if (data.length > 0) {
                        $scope.isScrollPaused = false;
                        lastPostId = data[data.length - 1].id;
                    } else {
                        $scope.isScrollPaused = true;
                        $scope.postsMessage = 'No more posts.';
                    }
                }, function (error) {
                    console.log(error.message);
                })
        };

        $scope.dateFromNow = function (date) {
            return moment(date).add(3, 'hours').fromNow();
        };

        $scope.likePost = function (post) {
            postsService.likePost(post.id)
                .then(function () {
                    post.liked = true;
                    post.likesCount++;
                    Notification.success('Post liked successfully.')
                })
        };

        $scope.unlikePost = function (post) {
            postsService.unlikePost(post.id)
                .then(function () {
                    post.liked = false;
                    post.likesCount--;
                    Notification.success('Post unliked successfully.')
                })
        }
    });