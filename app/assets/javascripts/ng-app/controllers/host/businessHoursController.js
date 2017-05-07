angular.module('BeConve')
    .controller('businessHoursController', ['$scope', '$location', '$window', 'Auth', 'Shop', 'BusinessHours',
        function($scope, $location, $window, Auth, Shop, BusinessHours) {

            Auth.currentUser().then(function(user) {
                $scope.timeSlots = ["Closed", "12:00AM", "12:30AM"];
                for(i=1;i<12;i++){
                    $scope.timeSlots.push(i.toString()+':00AM');
                    $scope.timeSlots.push(i.toString()+':30AM')
                }

                $scope.timeSlots.push('12:00 PM');

                for(i=1;i<12;i++){
                    $scope.timeSlots.push(i.toString()+':00PM');
                    $scope.timeSlots.push(i.toString()+':30PM')
                }

                var businessHours = BusinessHours.get({id: user.id }, function(res) {

                    if(res.status === 'failed'){
                        $scope.error = "Something went wrong. Can't find shop id. Please refresh the page"
                    }else{
                        for(i=0;i<res.businessHours.length;i++){

                            if(res.businessHours[i].day === 'Sunday'){
                                $scope.timeSlots.sundayOpen = res.businessHours[i].open_time;
                                $scope.timeSlots.sundayClose = res.businessHours[i].close_time
                            }else if(res.businessHours[i].day === 'Monday'){
                                $scope.timeSlots.mondayOpen = res.businessHours[i].open_time;
                                $scope.timeSlots.mondayClose = res.businessHours[i].close_time
                            }else if(res.businessHours[i].day === 'Tuesday'){
                                $scope.timeSlots.tuesdayOpen = res.businessHours[i].open_time;
                                $scope.timeSlots.tuesdayClose = res.businessHours[i].close_time
                            }else if(res.businessHours[i].day === 'Wednesday'){
                                $scope.timeSlots.wednesdayOpen = res.businessHours[i].open_time;
                                $scope.timeSlots.wednesdayClose = res.businessHours[i].close_time
                            }else if(res.businessHours[i].day === 'Thursday'){
                                $scope.timeSlots.thursdayOpen = res.businessHours[i].open_time;
                                $scope.timeSlots.thursdayClose = res.businessHours[i].close_time
                            }else if(res.businessHours[i].day === 'Friday'){
                                $scope.timeSlots.fridayOpen = res.businessHours[i].open_time;
                                $scope.timeSlots.fridayClose = res.businessHours[i].close_time
                            }else{
                                $scope.timeSlots.saturdayOpen = res.businessHours[i].open_time;
                                $scope.timeSlots.saturdayClose = res.businessHours[i].close_time
                            }
                        }

                    }
                    $scope.loading = false;
                });

                $scope.saveHours = function(){
debugger;$scope.arr = [
                        {day: 'sunday',
                        sundayOpen: $scope.timeSlots.sundayOpen,
                        sundayClose: $scope.timeSlots.sundayClose}];

                    businessHours.data = $scope.arr;
                    businessHours.$update({id: user.id}, function(res){
                        if(res.status === 'success'){
                            $scope.info = 'You have successfully save your profile'
                        }else{
                            $scope.info = 'Something went wrong. Please try again'
                        }
                    });
                };

            }, function(error) {
                $location.path('/')
            });

        }]);