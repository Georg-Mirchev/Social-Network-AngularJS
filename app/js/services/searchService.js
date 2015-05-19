'use strict';

socialNetworkApp.factory('searchService',
    function searchService($http, $q, baseServiceUrl) {
        var serviceUrl = baseServiceUrl + '/users/search?searchTerm=';

        return {
            searchUser: function (searchData) {
                var deferred = $q.defer();
                $http.get(serviceUrl + searchData)
                    .success(function (data) {
                        deferred.resolve(data)
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });
                return deferred.promise;
            }
        }
    });