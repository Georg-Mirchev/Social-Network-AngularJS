'use strict';

socialNetworkApp.factory('postsService',
    function postsService($http, $q, baseServiceUrl) {
        var serviceUrl = baseServiceUrl + '/me';

        return {
            getNewsFeed: function () {
                var deferred = $q.defer();

                $http.get(serviceUrl + '/feed?StartPostId&PageSize=5')
                    .success(function (data) {
                        deferred.resolve(data)
                    }).error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            }
        }
    });