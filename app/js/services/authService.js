'use strict';

socialNetworkApp.factory('authService',
    function authService($http, baseServiceUrl, $q) {

        var serviceUrl = baseServiceUrl + '/users';

        return {
            login: function (userData, success, error) {
                $http.post(serviceUrl + '/login', userData)
                    .success(success)
                    .error(error)
            },

            loginWithQ: function (userData) {
                var defer = $q.defer();
                $http.post(serviceUrl + '/login', userData)
                    .success(function (data) {
                        defer.resolve(data);
                    })
                    .error(function (error) {
                        defer.reject(error)
                    });

                return defer.promise;
            },

            register: function (userData, success, error) {
                $http.post(serviceUrl + '/register', userData)
                    .success(success)
                    .error(error)
            },

            logout: function (success, error) {
                var request = {
                    method: 'POST',
                    url: serviceUrl + '/logout',
                    headers: this.getAuthHeaders()
                };
                $http(request)
                    .success(success)
                    .error(error)
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

            getAuthHeaders: function () {
                var headers = {};
                var currentUser = this.getCurrentUser();
                if (currentUser) {
                    headers['Authorization'] = 'Bearer ' + currentUser.access_token;
                }
                return headers;
            }
        }
    });