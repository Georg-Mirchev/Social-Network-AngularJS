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
                    $('.commentContent').val('');
                    post.comments.push(data);
                    post.totalCommentsCount++;
                    Notification.success('Comment added successfully!')
                }, function (error) {
                    Notification.error('Failed to add comment. Please try again.')
                })
        };

        $scope.editComment = function (post, comment) {
            commentsService.editComment(post, comment)
                .then(function (data) {
                    comment.commentContent = data.commentContent;
                    Notification.success('Comment edited successfully.');
                }, function (error) {
                    Notification.error('Failed to edit comment.')
                })
        };

        $scope.deleteComment = function (post, comment) {
            commentsService.deleteComment(post.id, comment.id)
                .then(function (data) {
                    post.totalCommentsCount--;
                    post.comments.splice(post.comments.indexOf(comment), 1);
                    Notification.success('Comment deleted successfully.');
                }, function (error) {
                    Notification.error('Failed to delete comment.')
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