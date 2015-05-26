'use strict';

socialNetworkApp.factory('postsService',
    function postsService($http, $q, BASE_URL) {

        return {
            getPosts: function (pageSize, lastPostId) {
                var url = BASE_URL + '/me/feed?StartPostId=' + lastPostId +
                    '&PageSize=' + pageSize;

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

            getUserPosts: function (pageSize, lastPostId, username) {
                var url = BASE_URL + '/users/' + username + '/wall?StartPostId=' + lastPostId +
                    '&PageSize=' + pageSize;

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

            addPost: function (postContent) {
                var url = BASE_URL + '/posts';

                var deferred = $q.defer();
                $http.post(url, postContent)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            },

            likePost: function (postId) {
                var url = BASE_URL + '/Posts/' + postId + '/likes';

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

            unlikePost: function (postId) {
                var url = BASE_URL + '/Posts/' + postId + '/likes';

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