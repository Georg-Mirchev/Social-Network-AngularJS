'use strict';

socialNetworkApp.factory('friendsService',
    function friendsService($http, $q, BASE_URL) {

        return {
            getAllMyFriends: function () {
                var deferred = $q.defer();

                $http.get(BASE_URL + '/me/friends')
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },

            getOwnFriendsPreview: function () {
                var deferred = $q.defer();

                $http.get(BASE_URL + '/me/friends/preview')
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },

            getAllUserFriends: function (username) {
                var deferred = $q.defer();

                $http.get(BASE_URL + '/users/' + username + '/friends')
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },

            getUserFriendsPreview: function (username) {
                var deferred = $q.defer();

                $http.get(BASE_URL + '/users/' + username + '/friends/preview')
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