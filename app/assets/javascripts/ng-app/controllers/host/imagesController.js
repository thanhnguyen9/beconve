angular.module('BeConve')
    .controller('picturesController', ['$scope', '$location', 'Shop', 'Auth', '$http', 'ShopPictures', 'Upload',
        function($scope, $location, Shop, Auth, $http, ShopImages, Upload) {

            Auth.currentUser().then(function(user) {
                var pictures = ShopImages.query({ user_id: user.id }, function(res) {
                    $scope.images = res.response.images;
                });

                $scope.stepsModel = [];

                $scope.imageUpload = function(element){
                    var reader = new FileReader();
                    reader.onload = $scope.imageIsLoaded;
                    reader.readAsDataURL(element.files[0]);
                };

                $scope.imageIsLoaded = function(e){
                    $scope.$apply(function() {
                        $scope.stepsModel.push(e.target.result);
                    });
                };

                $scope.upload = function (file) {
                    if (angular.isUndefined($scope.file) || $scope.file === ''){
                        $scope.alert = 'Please select a picture to upload'
                    }else{
                        file = $scope.file;
                        Upload.upload({
                            url: '/api/v1/user_images',
                            data: {'user_image[image]': file, 'user_image[user_id]': user.id}
                        }).then(function (resp) {
                            $scope.info = 'Successfully uploaded the picture';
                            $scope.stepsModel = [];
                            console.log($scope.images);
                        }, function (resp) {
                            $scope.alert = 'Something went wrong. Please refresh the page and try again'
                        }, function (evt) {
                            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                            // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                        });
                    }
                };

                $scope.edit = function(pictureId){
                    debugger;
                    $location.path('/pictures/' + pictureId);
                }

            }, function(error) {
                $location.path('/')
            });

        }])

    .controller('picturesEditController', ['$scope', '$location', 'Shop', 'Auth', '$http', 'ShopPictures', 'Upload', '$routeParams',
        function($scope, $location, Shop, Auth, $http, ShopImages, Upload, $routeParams) {

            Auth.currentUser().then(function(user) {
                var pictures = ShopImages.get({ id: $routeParams.id }, function(res) {
                    $scope.image = res.response.image;
                });

                $scope.stepsModel = [];

                $scope.imageUpload = function(element){
                    var reader = new FileReader();
                    reader.onload = $scope.imageIsLoaded;
                    reader.readAsDataURL(element.files[0]);
                };

                $scope.imageIsLoaded = function(e){
                    $scope.$apply(function() {
                        $scope.stepsModel.push(e.target.result);
                    });
                };

                $scope.upload = function (file) {
                    if (angular.isUndefined($scope.file) || $scope.file === ''){
                        $scope.alert = 'Please select a picture to upload'
                    }else{
                        file = $scope.file;
                        Upload.upload({
                            url: '/api/v1/user_images/edit',
                            data: {'user_image[image]': file, 'id': $scope.image.id}
                        }).then(function (res) {
                            debugger;
                            $scope.info = 'Successfully uploaded the picture';
                            $scope.stepsModel = [];
                            debugger;
                            $scope.image = res.response.image
                        }, function (res) {
                            $scope.alert = 'Something went wrong. Please refresh the page and try again'
                        }, function (evt) {
                            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                            // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                        });
                    }
                };

            }, function(error) {
                $location.path('/')
            });

        }]);