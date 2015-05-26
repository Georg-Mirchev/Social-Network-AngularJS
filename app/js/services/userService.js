'use strict';

socialNetworkApp.factory('userService',
    function userService($http, $q, BASE_URL) {

        var serviceUrl = BASE_URL;

        return {
            getDataAboutMe: function () {
                var deferred = $q.defer();

                $http.get(serviceUrl + '/me')
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },

            getDataAboutUser: function (username) {
                var deferred = $q.defer();

                $http.get(serviceUrl + '/users/' + username)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },

            getUserPreviewData: function (username) {
                var deferred = $q.defer();

                $http.get(serviceUrl + '/users/' + username + '/preview')
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

                $http.put(serviceUrl + '/me', userData)
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

                $http.put(serviceUrl + '/me' + '/changepassword', userData)
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