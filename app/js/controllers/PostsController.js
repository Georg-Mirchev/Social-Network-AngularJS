'use strict';

socialNetworkApp.controller('PostsController',
    function PostsController($scope, $routeParams, PAGE_SIZE, postsService, Notification, authService) {

        var lastPostId = '';
        $scope.posts = [];
        $scope.postsMessage = 'Loading posts...';

        $scope.newsFeedPosts = function () {
            if ($scope.isScrollPaused) return;
            $scope.isScrollPaused = true;

            postsService.getPosts(PAGE_SIZE, lastPostId)
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
                    Notification.error(error.message);
                })
        };

        $scope.userPosts = function () {
            if ($scope.isScrollPaused) return;
            $scope.isScrollPaused = true;

            postsService.getUserPosts(PAGE_SIZE, lastPostId, $routeParams.username)
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
                    Notification.error(error.message);
                });
        };

        $scope.addPost = function (data, username) {
            var postContent = {
                postContent: data,
                username: username
            };

            postsService.addPost(postContent)
                .then(function (data) {
                    $('#postContent').val('');
                    $scope.posts.unshift(data);
                    Notification.success('Post successfully added.');
                }, function (error) {
                    $scope.postData.postContent = "";
                    Notification.error(error.message);
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
                }, function (error) {
                    Notification.error("You can't like this.");
                })
        };

        $scope.unlikePost = function (post) {
            postsService.unlikePost(post.id)
                .then(function () {
                    post.liked = false;
                    post.likesCount--;
                    Notification.success('Post unliked successfully.')
                }, function (error) {
                    Notification.error("You can't like this.");
                })
        }
    });