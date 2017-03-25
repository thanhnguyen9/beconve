angular
    .module('BeConve')

    .controller('ModalDemoCtrl', ['$scope', '$routeParams', '$sessionStorage', '$location', 'Shop', '$http',
    '$uibModal', '$log', '$document', 'ModalData',
    function($scope, $routeParams, $sessionStorage, $location, Shop, $http, $uibModal, $log, $document, ModalData) {
        var $ctrl = this;
        $scope.data = [{"name":"Bell","id":"K0H 2V5"},{"name":"Octavius","id":"X1E 6J0"},{"name":"Alexis","id":"N6E 1L6"},{"name":"Colton","id":"U4O 1H4"},{"name":"Abdul","id":"O9Z 2Q8"},{"name":"Ian","id":"Q7W 8M4"},{"name":"Eden","id":"H8X 5E0"},{"name":"Britanney","id":"I1Q 1O1"},{"name":"Ulric","id":"K5J 1T0"},{"name":"Geraldine","id":"O9K 2M3"},{"name":"Hamilton","id":"S1D 3O0"},{"name":"Melissa","id":"H9L 1B7"},{"name":"Remedios","id":"Z3C 8P4"},{"name":"Ignacia","id":"K3B 1Q4"},{"name":"Jaime","id":"V6O 7C9"},{"name":"Savannah","id":"L8B 8T1"},{"name":"Declan","id":"D5Q 3I9"},{"name":"Skyler","id":"I0O 4O8"},{"name":"Lawrence","id":"V4K 0L2"},{"name":"Yael","id":"R5E 9D9"},{"name":"Herrod","id":"V5W 6L3"},{"name":"Lydia","id":"G0E 2K3"},{"name":"Tobias","id":"N9P 2V5"},{"name":"Wing","id":"T5M 0E2"},{"name":"Callum","id":"L9P 3W5"},{"name":"Tiger","id":"R9A 4E4"},{"name":"Summer","id":"R4B 4Q4"},{"name":"Beverly","id":"M5E 4V4"},{"name":"Xena","id":"I8G 6O1"},{"name":"Yael","id":"L1K 5C3"},{"name":"Stacey","id":"A4G 1S4"},{"name":"Marsden","id":"T1J 5J3"},{"name":"Uriah","id":"S9S 8I7"},{"name":"Kamal","id":"Y8Z 6X0"},{"name":"MacKensie","id":"W2N 7P9"},{"name":"Amelia","id":"X7A 0U3"},{"name":"Xavier","id":"B8I 6C9"},{"name":"Whitney","id":"H4M 9U2"},{"name":"Linus","id":"E2W 7U1"},{"name":"Aileen","id":"C0C 3N2"},{"name":"Keegan","id":"V1O 6X2"},{"name":"Leonard","id":"O0L 4M4"},{"name":"Honorato","id":"F4M 8M6"},{"name":"Zephr","id":"I2E 1T9"},{"name":"Karen","id":"H8W 4I7"},{"name":"Orlando","id":"L8R 0U4"},{"name":"India","id":"N8M 8F4"},{"name":"Luke","id":"Q4Y 2Y8"},{"name":"Sophia","id":"O7F 3F9"},{"name":"Faith","id":"B8P 1U5"},{"name":"Dara","id":"J4A 0P3"},{"name":"Caryn","id":"D5M 8Y8"},{"name":"Colton","id":"A4Q 2U1"},{"name":"Kelly","id":"J2E 2L3"},{"name":"Victor","id":"H1V 8Y5"},{"name":"Clementine","id":"Q9R 4G8"},{"name":"Dale","id":"Q1S 3I0"},{"name":"Xavier","id":"Z0N 0L5"},{"name":"Quynn","id":"D1V 7B8"},{"name":"Christine","id":"A2X 0Z8"},{"name":"Matthew","id":"L1H 2I4"},{"name":"Simon","id":"L2Q 7V7"},{"name":"Evan","id":"Z8Y 6G8"},{"name":"Zachary","id":"F4K 8V9"},{"name":"Deborah","id":"I0D 4J6"},{"name":"Carl","id":"X7H 3J3"},{"name":"Colin","id":"C8P 0O1"},{"name":"Xenos","id":"K3S 1H5"},{"name":"Sonia","id":"W9C 0N3"},{"name":"Arsenio","id":"B0M 2G6"},{"name":"Angela","id":"N9X 5O7"},{"name":"Cassidy","id":"T8T 0Q5"},{"name":"Sebastian","id":"Y6O 0A5"},{"name":"Bernard","id":"P2K 0Z5"},{"name":"Kerry","id":"T6S 4T7"},{"name":"Uriel","id":"K6G 5V2"},{"name":"Wanda","id":"S9G 2E5"},{"name":"Drake","id":"G3G 8Y2"},{"name":"Mia","id":"E4F 4V8"},{"name":"George","id":"K7Y 4L4"},{"name":"Blair","id":"Z8E 0F0"},{"name":"Phelan","id":"C5Z 0C7"},{"name":"Margaret","id":"W6F 6Y5"},{"name":"Xaviera","id":"T5O 7N5"},{"name":"Willow","id":"W6K 3V0"},{"name":"Alden","id":"S2M 8C1"},{"name":"May","id":"L5B 2H3"},{"name":"Amaya","id":"Q3B 7P8"},{"name":"Julian","id":"W6T 7I6"},{"name":"Colby","id":"N3Q 9Z2"},{"name":"Cole","id":"B5G 0V7"},{"name":"Lana","id":"O3I 2W9"},{"name":"Dieter","id":"J4A 9Y6"},{"name":"Rowan","id":"I7E 9U4"},{"name":"Abraham","id":"S7V 0W9"},{"name":"Eleanor","id":"K7K 9P4"},{"name":"Martina","id":"V0Z 5Q7"},{"name":"Kelsie","id":"R7N 7P2"},{"name":"Hedy","id":"B7E 7F2"},{"name":"Hakeem","id":"S5P 3P6"}];
        $scope.viewby = 10;
        $scope.totalItems = $scope.data.length;
        $scope.currentPage = 4;
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
debugger;
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
            maxDate: new Date(2018, 5, 22),
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

        $scope.data = [{"name":"Bell","id":"K0H 2V5"},{"name":"Octavius","id":"X1E 6J0"},{"name":"Alexis","id":"N6E 1L6"},{"name":"Colton","id":"U4O 1H4"},{"name":"Abdul","id":"O9Z 2Q8"},{"name":"Ian","id":"Q7W 8M4"},{"name":"Eden","id":"H8X 5E0"},{"name":"Britanney","id":"I1Q 1O1"},{"name":"Ulric","id":"K5J 1T0"},{"name":"Geraldine","id":"O9K 2M3"},{"name":"Hamilton","id":"S1D 3O0"},{"name":"Melissa","id":"H9L 1B7"},{"name":"Remedios","id":"Z3C 8P4"},{"name":"Ignacia","id":"K3B 1Q4"},{"name":"Jaime","id":"V6O 7C9"},{"name":"Savannah","id":"L8B 8T1"}];
        $scope.viewby = 5;
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

        $scope.timeSlot = function (timeSlot){
            $scope.timeSlotSelected = timeSlot
        };

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