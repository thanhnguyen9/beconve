angular
    .module('BeConve')

    .controller('ModalDemoCtrl', ['$scope', '$routeParams', '$sessionStorage', '$location', 'Shop', '$http',
    '$uibModal', '$log', '$document', 'ModalData', 'BusinessHours',
    function($scope, $routeParams, $sessionStorage, $location, Shop, $http, $uibModal, $log, $document, ModalData, BusinessHours, TimeSlots) {
        var $ctrl = this;

        var shopInfo = Shop.get({id: $routeParams.id});
        shopInfo.$promise.then(function(res){
            if(res.status === 'failed'){
                $ctrl.error = "Something went wrong. Can't find shop id. Please refresh the page"
            }else{
                $ctrl.shop = res.shop;

                $ctrl.format_bussiness_hour = [];

                for(i=0;i < $ctrl.shop.business_hours.length;i++){

                    json_object = {};


                    if ($ctrl.shop.business_hours[i].open === true) {
                        open_time = $ctrl.shop.business_hours[i].open_time.split('T')[1].split(':').slice(0,2).join(':');
                        close_time = $ctrl.shop.business_hours[i].close_time.split('T')[1].split(':').slice(0,2).join(':');
                        json_object = {
                            day: $ctrl.shop.business_hours[i].day,
                            hour: open_time+ ' - ' + close_time
                        };

                        $ctrl.format_bussiness_hour.push(json_object)
                    }else{
                        json_object = {
                            day: $ctrl.shop.business_hours[i].day,
                            hour: 'Closed'
                        };
                        $ctrl.format_bussiness_hour.push(json_object)
                    }
                }

                $ctrl.availableSlots = [];

                for(i=0;i < res.slots.length;i++){
                    $ctrl.availableSlots.push(res.slots[i].split('T')[1].split(':').slice(0,2).join(':'));
                }

                TimeSlots = $ctrl.availableSlots;

                $sessionStorage['shopName'] = $ctrl.shop.name
            }
            $ctrl.loading = false;
        });

        $ctrl.items = ['item1', 'item2', 'item3'];

        $ctrl.animationsEnabled = true;

        $ctrl.open = function (size, parentSelector) {
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function () {
                        return $ctrl.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $ctrl.openComponentModal = function () {
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                component: 'modalComponent',
                resolve: {
                    items: function () {
                        return $ctrl.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
            }, function () {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        };

        $ctrl.openMultipleModals = function () {
            $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title-bottom',
                ariaDescribedBy: 'modal-body-bottom',
                templateUrl: 'stackedModal.html',
                size: 'sm',
                controller: function($ctrl) {
                    $ctrl.modalName = 'bottom';
                }
            });

            $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title-top',
                ariaDescribedBy: 'modal-body-top',
                templateUrl: 'stackedModal.html',
                size: 'sm',
                controller: function($ctrl) {
                    $ctrl.modalName = 'top';
                }
            });
        };

        $ctrl.toggleAnimation = function () {
            $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
        };

    }]);

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('BeConve').controller('ModalInstanceCtrl', [ '$scope', '$uibModalInstance', 'items', 'ModalData', '$sessionStorage',
    'Shop', '$routeParams',
    function ($scope, $uibModalInstance, items, ModalData, $sessionStorage, Shop, $routeParams, TimeSlots) {

        var $ctrl = this;
        $ctrl.items = items;
        $ctrl.selected = {
            item: $ctrl.items[0]
        };

        $ctrl.ok = function () {
            $uibModalInstance.close($ctrl.selected.item);
        };

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        // Datepicker

        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            min: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2017, 12, 31),
            min: new Date(),
            startingDay: 1
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function() {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };

        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };


        $scope.popup2 = {
            opened: false
        };


        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }

        //    Pager

        $scope.timeSlot = function (timeSlot){
            $scope.timeSlotSelected = timeSlot
        };

        $scope.$watch('dt', function(newVal, oldVal) {

            dateSelected = newVal.getFullYear() + ',' + (parseInt(newVal.getMonth()) + 1).toString() + ',' + newVal.getDate();

            var shopInfo = Shop.get({id: $routeParams.id});
            shopInfo.$promise.then(function(res){
                if(res.status === 'failed'){
                    $ctrl.error = "Something went wrong. Can't find shop id. Please refresh the page"
                }else{
                    $ctrl.shop = res.shop;

                    $ctrl.format_bussiness_hour = [];

                    for(i=0;i < $ctrl.shop.business_hours.length;i++){

                        json_object = {};


                        if ($ctrl.shop.business_hours[i].open === true) {
                            open_time = $ctrl.shop.business_hours[i].open_time.split('T')[1].split(':').slice(0,2).join(':');
                            close_time = $ctrl.shop.business_hours[i].close_time.split('T')[1].split(':').slice(0,2).join(':');
                            json_object = {
                                day: $ctrl.shop.business_hours[i].day,
                                hour: open_time+ ' - ' + close_time
                            };

                            $ctrl.format_bussiness_hour.push(json_object)
                        }else{
                            json_object = {
                                day: $ctrl.shop.business_hours[i].day,
                                hour: 'Closed'
                            };
                            $ctrl.format_bussiness_hour.push(json_object)
                        }
                    }

                    $scope.data = [];

                    for(i=0;i < res.slots.length;i++){
                        $scope.data.push(res.slots[i].split('T')[1].split(':').slice(0,2).join(':'));
                    }

                    $scope.viewby = 10;
                    $scope.totalItems = $scope.data.length;
                    $scope.currentPage = 1;
                    $scope.itemsPerPage = $scope.viewby;
                    $scope.maxSize = 5; //Number of pager buttons to show

                    $scope.setPage = function (pageNo) {
                        $scope.currentPage = pageNo;
                    };

                    $scope.pageChanged = function() {
                        console.log('Page changed to: ' + $scope.currentPage);
                    };

                    $scope.setItemsPerPage = function(num) {
                        $scope.itemsPerPage = num;
                        $scope.currentPage = 1; //reset to first paghe
                    };

                    $sessionStorage['shopName'] = $ctrl.shop.name
                }
                $ctrl.loading = false;
            });
        })

    }]);

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('BeConve').component('modalComponent', {
    templateUrl: 'myModalContent.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function () {
        var $ctrl = this;

        $ctrl.$onInit = function () {
            $ctrl.items = $ctrl.resolve.items;
            $ctrl.selected = {
                item: $ctrl.items[0]
            };
        };

        $ctrl.ok = function () {
            $ctrl.close({$value: $ctrl.selected.item});
        };

        $ctrl.cancel = function () {
            $ctrl.dismiss({$value: 'cancel'});
        };
    }
})

// Create the factory that share the Fact

    .factory('ModalData', function(){
        return { shopName: '' };
    });