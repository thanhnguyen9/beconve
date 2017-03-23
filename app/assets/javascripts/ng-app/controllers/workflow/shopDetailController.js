angular.module('BeConve').controller('ModalDemoCtrl', ['$scope', '$routeParams', '$sessionStorage', '$location', 'Shop', '$http',
    '$uibModal', '$log', '$document', 'ModalData',
    function($scope, $routeParams, $sessionStorage, $location, Shop, $http, $uibModal, $log, $document, ModalData) {
        var $ctrl = this;

        $ctrl.hours = [
            {
                date: "Monday",
                hour: "9:00AM - 7:00 PM"
            },
            {
                date: "Tuesday",
                hour: "9:00AM - 7:00 PM"
            },
            {
                date: "Wedsday",
                hour: "9:00AM - 7:00 PM"
            },
            {
                date: "Thursday",
                hour: "9:00AM - 7:00 PM"
            },
            {
                date: "Friday",
                hour: "9:00AM - 7:00 PM"
            },
            {
                date: "Saturday",
                hour: "12:00AM - 6:00 PM"
            },
            {
                date: "Sunday",
                hour: "Closed"
            }

        ];

        var shopInfo = Shop.get({id :$routeParams.id});
        shopInfo.$promise.then(function(res){
            if(res.status === 'success'){

                $ctrl.shop = res.response;
                $sessionStorage['shopName'] = $ctrl.shop.name

            }else{
                $ctrl.error = 'Something went wrong. Please refresh the page'
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

        $ctrl.today = function() {
            $ctrl.dt = new Date();
        };
        $ctrl.today();

        $ctrl.clear = function() {
            $ctrl.dt = null;
        };

        $ctrl.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $ctrl.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $ctrl.toggleMin = function() {
            $ctrl.inlineOptions.minDate = $ctrl.inlineOptions.minDate ? null : new Date();
            $ctrl.dateOptions.minDate = $ctrl.inlineOptions.minDate;
        };

        $ctrl.toggleMin();

        $ctrl.open1 = function() {
            $ctrl.popup1.opened = true;
        };

        $ctrl.open2 = function() {
            $ctrl.popup2.opened = true;
        };

        $ctrl.setDate = function(year, month, day) {
            $ctrl.dt = new Date(year, month, day);
        };

        $ctrl.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $ctrl.format = $ctrl.formats[0];
        $ctrl.altInputFormats = ['M!/d!/yyyy'];

        $ctrl.popup1 = {
            opened: false
        };

        $ctrl.popup2 = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $ctrl.events = [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i = 0; i < $ctrl.events.length; i++) {
                    var currentDay = new Date($ctrl.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                        return $ctrl.events[i].status;
                    }
                }
            }

            return '';
        }

    }]);

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('BeConve').controller('ModalInstanceCtrl', [ '$scope', '$uibModalInstance', 'items', 'ModalData', '$sessionStorage',
    function ($scope, $uibModalInstance, items, ModalData, $sessionStorage) {

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

        $scope.shopName = $sessionStorage['shopName'];

        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2018, 5, 22),
            minDate: new Date(),
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