'use strict';

socialNetworkApp.controller('SearchController',
    function SearchController($scope, searchService, $timeout) {

        $scope.searchUser = function (searchUser) {
            if (searchUser != undefined) {
                searchService.searchUser(searchUser,
                    function success(data) {
                        $scope.searchObj = data;
                    },
                    function error(error) {
                        console.log(error);
                    });
            } else {
                $scope.searchObj = '';
            }
        };

        $scope.focus = function () {
            $scope.showSearchResults = true;
        };

        $scope.blur = function () {
            $timeout(function () {
                $scope.showSearchResults = false;
            }, 1000);

        };

        $scope.clickTest = function () {
            console.log('clicked')
        };

        $scope.checkUrl = function (searchResult) {
            if (searchResult.profileImageData) {
                return searchResult.profileImageData != 'null' && searchResult.profileImageData.length > 50
            }
        };

        $scope.formatImg = function (searchResult) {
            if (searchResult.profileImageData) {
                return searchResult.profileImageData.split('data:image/jpeg;base64,')
                    [searchResult.profileImageData.split('data:image/jpeg;base64,').length - 1];
            }
        }

    });