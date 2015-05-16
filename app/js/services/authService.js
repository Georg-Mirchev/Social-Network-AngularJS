'use strict';

socialNetworkApp.factory('authService',
    function authService($http, baseServiceUrl) {

        var serviceUrl = baseServiceUrl + '/users';

        return {
            login: function (userData, success, error) {
                $http.post(serviceUrl + '/login', userData)
                    .success(function (data) {
                        success(data);
                    }).error(error);
            },

            register: function (userData, success, error) {
                $http.post(serviceUrl + '/register', userData)
                    .success(function (data) {
                        success(data);
                    }).error(error)
            },

            isLoggedIn: function () {
                return sessionStorage.currentUser != undefined;
            },

            isNotLoggedIn: function () {
                return sessionStorage.currentUser == undefined;
            },

            getCurrentUser: function () {
                var userStorageData = sessionStorage.currentUser;
                if (userStorageData) {
                    return JSON.parse(sessionStorage.currentUser);
                }
            },

            logout: function () {
                delete sessionStorage.currentUser;
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