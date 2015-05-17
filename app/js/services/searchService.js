'use strict';

socialNetworkApp.factory('searchService',
    function searchService($http, baseServiceUrl, authService) {
        var serviceUrl = baseServiceUrl + '/users/search?searchTerm=' ;

        return {
            searchUser: function (searchData, success, error) {
                $http.get(serviceUrl + searchData,
                    {
                        headers: authService.getAuthHeaders()
                        //,ignoreLoadingBar: true
                    })
                    .success(success)
                    .error(error)
            }
        }

    });