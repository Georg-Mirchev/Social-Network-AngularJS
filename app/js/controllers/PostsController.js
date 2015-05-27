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
                    $('#postContent').val('');
                    Notification.error(error.message);
                })
        };

        $scope.editPost = function (post) {

            postsService.editPost(post)
                .then(function (data) {
                    post.postContent = data.content;
                    Notification.success('Post edited successfully.');
                }, function (error) {
                    console.log(error);
                    Notification.error('Failed editing post.');
                })
        };

        $scope.deletePost = function (post) {
            postsService.deletePost(post)
                .then(function () {
                    $scope.posts.splice($scope.posts.indexOf(post), 1);
                    Notification.success('Post deleted successfully.');
                }, function (error) {
                    console.log(error);
                    Notification.error('Failed deleting post.');
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