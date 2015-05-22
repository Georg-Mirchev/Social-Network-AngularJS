'use strict';

socialNetworkApp.factory('postsService',
    function postsService($http, $q, baseServiceUrl) {
        var serviceUrl = baseServiceUrl + '/me';

        return {
            getPosts: function (pageSize, lastPostId) {
                var url = serviceUrl + '/feed?StartPostId=' + lastPostId
                    + '&PageSize=' + pageSize;

                var deferred = $q.defer();
                $http.get(url)
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