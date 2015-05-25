'use strict';

socialNetworkApp.controller('EditProfileController',
    function EditProfileController($scope, $location, userService, Notification, userData) {

        $scope.userData = userData;

        //$scope.getDataAboutMe = function () {
        //    userService.getDataAboutMe()
        //        .then(function (data) {
        //            $scope.userData = data;
        //        }, function (error) {
        //            var errorMsg = error.modelState[Object.keys(error.modelState)[0]][0];
        //            Notification.error(errorMsg);
        //        });
        //};

        $scope.uploadImage = function (fileInputField, isCoverImage) {
            var sizeLimit;
            isCoverImage ? sizeLimit = 1024000 : sizeLimit = 128000;

            var file = fileInputField.files[0];
            if (file && file.type.match(/image\/.*/) && file.size < sizeLimit) {
                var reader = new FileReader();
                reader.onload = function () {
                    if (isCoverImage) {
                        $('#coverImagePreview').attr('src', reader.result);
                        $scope.userData.coverImageData = reader.result;
                    } else {
                        $('#profileImagePreview').attr('src', reader.result);
                        $scope.userData.profileImageData = reader.result;
                    }
                };
                reader.readAsDataURL(file);
            } else if (file) {
                if (isCoverImage) {
                    file.size > sizeLimit ? Notification.info('Cover image size limit is 1024kb.') :
                        Notification.info('File not supported!');
                } else {
                    file.size > sizeLimit ? Notification.info('Profile picture size limit is 128kb.') :
                        Notification.info('File not supported!');
                }
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