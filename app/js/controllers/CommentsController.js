'use strict';

socialNetworkApp.controller('CommentsController',
    function CommentsController($scope, commentsService, Notification) {

        $scope.showAllComments = function (post) {
            commentsService.getPostComments(post.id)
                .then(function (data) {
                    post.comments = data;
                }, function (error) {
                    Notification.error(error);
                })
        };

        $scope.addComment = function (post, commentData) {
            commentsService.addComment(post.id, commentData)
                .then(function (data) {
                    $scope.commentData.commentContent = "";
                    post.comments.push(data);
                    post.totalCommentsCount++;
                    Notification.success('Comment added successfully!')
                }, function (error) {
                    Notification.error(error);
                })
        };

        $scope.likeComment = function (post, comment) {
            commentsService.likeComment(post.id, comment.id)
                .then(function () {
                    comment.liked = true;
                    comment.likesCount++;
                    Notification.success('Comment liked successfully.')
                }, function (error) {
                    Notification.error(error.message);
                })
        };

        $scope.unlikeComment = function (post, comment) {
            commentsService.unlikeComment(post.id, comment.id)
                .then(function () {
                    comment.liked = false;
                    comment.likesCount--;
                    Notification.success('Comment unliked successfully.')
                }, function (error) {
                    Notification.error(error.message);
                })
        };
    });