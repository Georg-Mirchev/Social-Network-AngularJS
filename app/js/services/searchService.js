'use strict';

socialNetworkApp.factory('searchService',
    function searchService($http, baseServiceUrl, authService) {
        var serviceUrl = baseServiceUrl + '/users/search?searchTerm=' ;

        return {
            searchUser: function (searchData, success, error) {
                var req = {
                    method: 'GET',
                    url: serviceUrl + searchData,
                    headers: authService.getAuthHeaders()
                };
                $http(req).success(success).error(error);
            }
        }
    });