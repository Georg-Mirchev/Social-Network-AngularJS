'use strict';

socialNetworkApp.factory('commentsService',
    function commentsService($http, $q, baseServiceUrl) {

        var serviceUrl = baseServiceUrl + '/posts/';

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