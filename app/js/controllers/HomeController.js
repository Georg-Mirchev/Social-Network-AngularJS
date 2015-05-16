'use strict';

socialNetworkApp.controller('HomeController',
    function HomeController($scope, authService, searchService) {

        $scope.searchUser = function (searchUs) {
                searchService.searchUser(searchUs,
                    function success(data) {
                        $scope.searchObj = data;
                    },
                    function error(error) {
                        console.log(error);
                    })
            }
    });