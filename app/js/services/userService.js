'use strict';

socialNetworkApp.factory('userService',
    function userService($http, $q, baseServiceUrl) {

        var serviceUrl = baseServiceUrl + '/me';

        return {
            getDataAboutMe: function () {
                var deferred = $q.defer();

                $http.get(serviceUrl)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },

            editProfile: function (userData) {
                var deferred = $q.defer();

                $http.put(serviceUrl, userData)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },

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