'use strict';

socialNetworkApp.controller('EditProfileController',
    function EditProfileController($scope, $location, userService, Notification) {

        $scope.getDataAboutMe = function () {
            userService.getDataAboutMe()
                .then(function (data) {
                    $scope.userData = data;
                }, function (error) {
                    var errorMsg = error.modelState[Object.keys(error.modelState)[0]][0];
                    Notification.error(errorMsg);
                });
        };

        $scope.getDataAboutMe();

        $scope.uploadImage = function(fileInputField) {

            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $('#profileImagePreview').attr('src', reader.result);
                    $scope.userData.profileImageData = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                Notification.info('File not supported!');
                $('#profileImagePreview').attr('src', '');
                $scope.userData.profileImageData = null;
            }
        };

        $scope.editProfile = function (userData) {
            userService.editProfile(userData)
                .then(function (data) {
                    Notification.success(data.message);
                    //location my profile
                    $location.path('/');
                }, function (error) {
                    var errorMsg = error.modelState[Object.keys(error.modelState)[0]][0];
                    Notification.error(errorMsg);
                })
        };
    });