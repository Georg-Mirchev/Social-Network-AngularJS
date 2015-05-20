'use strict';

socialNetworkApp.controller('HomeController',
    function HomeController($scope, authService, postsService) {

        $scope.newsFeedPosts = postsService.load();
    });