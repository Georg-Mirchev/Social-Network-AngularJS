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

        $scope.showHideResults = function () {
            $timeout(function () {
                $scope.showSearchResults = !$scope.showSearchResults;
            }, 750);
        };

        $scope.checkAndFormatImgUrl = function (searchResult) {
            if (searchResult.profileImageData &&
                searchResult.profileImageData != 'null' &&
                searchResult.profileImageData.length > 50) {
                return 'data:image/jpeg;base64,' + searchResult.profileImageData.split('data:image/jpeg;base64,')
                    [searchResult.profileImageData.split('data:image/jpeg;base64,').length - 1];
            }
        };

        $scope.clickTest = function () {
            console.log('clicked')
        };
    });