'use strict';

socialNetworkApp.factory('searchService',
    function searchService($http, $q, BASE_URL) {
        var serviceUrl = BASE_URL + '/users/search?searchTerm=';

        return {
            searchUser: function (searchData) {
                var deferred = $q.defer();
                $http.get(serviceUrl + searchData, {
                    ignoreLoadingBar: true
                })
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