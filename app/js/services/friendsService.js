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
            },

            sendFriendRequest: function (username) {
                var deferred = $q.defer();

                $http.post(BASE_URL + '/me/requests/' + username)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },

            getFriendRequests: function () {
                var deferred = $q.defer();

                $http.get(BASE_URL + '/me/requests')
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },

            approveFriendRequest: function (request) {
                var deferred = $q.defer();

                $http.put(BASE_URL + '/me/requests/' + request.id + '?status=approved')
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },

            rejectFriendRequest: function (request) {
                var deferred = $q.defer();

                $http.put(BASE_URL + '/me/requests/' + request.id + '?status=rejected')
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
        };
    });