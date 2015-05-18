'use strict';

socialNetworkApp.factory('authService',
    function authService($http, baseServiceUrl, $q) {

        var serviceUrl = baseServiceUrl + '/users';

        return {
            login: function (userData) {
                var deferred = $q.defer();
                $http.post(serviceUrl + '/login', userData)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            },

            register: function (userData) {
                var deferred = $q.defer();
                $http.post(serviceUrl + '/register', userData)
                    .success(function (data) {
                        console.log('Q ser');
                        deferred.resolve(data)
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            },

            logout: function () {
                var deferred = $q.defer();
                $http.post(serviceUrl + '/logout')
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error)
                    });

                return deferred.promise;
            },

            isLoggedIn: function () {
                return sessionStorage.currentUser != undefined;
            },

            getCurrentUser: function () {
                var userStorageData = sessionStorage.currentUser;
                if (userStorageData) {
                    return JSON.parse(sessionStorage.currentUser);
                }
            },

            setSessionStorage: function (data) {
                sessionStorage.currentUser = JSON.stringify(data);
                $http.defaults.headers.common.Authorization =
                    'Bearer ' + data.access_token;
            }
        }
    });