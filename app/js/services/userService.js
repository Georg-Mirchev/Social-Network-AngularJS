'use strict';

socialNetworkApp.factory('userService',
    function userService($http, $q, baseServiceUrl) {

        var serviceUrl = baseServiceUrl + '/me';

        return {
            changePassword: function (userData) {
                var deferred = $q.defer();

                $http.put(serviceUrl + '/changepassword', userData)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            }
        };
    });