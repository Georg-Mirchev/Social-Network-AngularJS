'use strict';

socialNetworkApp.factory('commentsService',
    function commentsService($http, $q, BASE_URL) {

        var serviceUrl = BASE_URL + '/posts/';

        return {
            getPostComments: function (postId) {
                var url = serviceUrl + postId + '/comments';

                var deferred = $q.defer();
                $http.get(url)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            },

            addComment: function (postId, commentData) {
                var url = serviceUrl + postId + '/comments';

                var deferred = $q.defer();
                $http.post(url, commentData)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            },

            editComment: function (post, comment) {
                var url = serviceUrl + post.id + '/comments/' + comment.id;

                var deferred = $q.defer();
                $http.put(url, comment)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            },

            deleteComment: function (postId, commentId) {
                var url = serviceUrl + postId + '/comments/' + commentId;

                var deferred = $q.defer();
                $http.delete(url)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            },

            likeComment: function (postId, commendId) {
                var url = serviceUrl + postId + '/comments/' + commendId + '/likes';

                var deferred = $q.defer();
                $http.post(url)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            },

            unlikeComment: function (postId, commendId) {
                var url = serviceUrl + postId + '/comments/' + commendId + '/likes';

                var deferred = $q.defer();
                $http.delete(url)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            }
        }
    });