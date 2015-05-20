'use strict';

socialNetworkApp.factory('postsService',
    function postsService($http, $q, baseServiceUrl) {
        var serviceUrl = baseServiceUrl + '/me';

        var NewsFeedPosts = function () {
            this.posts = [];
            this.isScrollPaused = false;
            this.lastPostId = '';
            this.message = 'Loading posts...';
        };

        NewsFeedPosts.prototype.nextPosts = function () {
            var url = serviceUrl + '/feed?StartPostId=' + this.lastPostId + '&PageSize=2';

            if (this.isScrollPaused) return;
            this.isScrollPaused = true;

            $http.get(url).success(function (data) {
                var posts = data;
                for (var i = 0; i < posts.length; i++) {
                    this.posts.push(posts[i]);
                }
                if (data.length == 0) {
                    this.message = 'No more posts.';
                    return;
                }
                this.lastPostId = this.posts[this.posts.length - 1].id;
                this.isScrollPaused = false;
            }.bind(this));
        };

        return {
            load: function () {
                return new NewsFeedPosts();
            }
        }
    });