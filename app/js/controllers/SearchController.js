'use strict';

socialNetworkApp.controller('SearchController',
    function SearchController($scope, searchService, $timeout) {

        $scope.searchUser = function (searchUser) {
            if (searchUser != undefined) {
                searchService.searchUserWithQ(searchUser)
                    .then(function (data) {
                        $scope.searchObj = data;
                    }, function (error) {
                        console.log(error);
                    })
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
    });