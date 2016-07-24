angular.module('BeConve')
    .controller('DeviceController', ['$location', 'Workflow', function($location, Workflow) {

        this.deviceNames = [{
            id: 1,
            name: 'Apple',
            desc: ''
        }, {
            id: 2,
            name: 'Samsung',
            desc: ''
        }, {
            id: 3,
            name: 'Ipad',
            desc: ''
        }
        ];

        this.modelNames = [{
            parent: 1,
            id: 9,
            name: 'Iphone 4',
            desc: ''
        }, {
            parent: 1,
            id: 10,
            name: 'Iphone 4S',
            desc: ''
        }, {
            parent: 1,
            id: 11,
            name: 'Iphone 5',
            desc: ''
        }, {
            parent: 1,
            id: 12,
            name: 'Iphone 5C',
            desc: ''
        }, {
            parent: 1,
            id: 13,
            name: 'Iphone 5S',
            desc: ''
        }, {
            parent: 1,
            id: 14,
            name: 'Iphone 6',
            desc: ''
        }, {
            parent: 1,
            id: 15,
            name: 'Iphone 6 Plus',
            desc: ''
        }, {
            parent: 1,
            id: 16,
            name: 'Iphone 6S',
            desc: ''
        }, {
            parent: 1,
            id: 17,
            name: 'Iphone 6S Plus',
            desc: ''
        }, {
            parent: 1,
            id: 18,
            name: 'Iphone SE',
            desc: ''
        }, {
            parent: 2,
            id: 19,
            name: 'Note',
            desc: ''
        }, {
            parent: 2,
            id: 20,
            name: 'Note 2',
            desc: ''
        }, {
            parent: 2,
            id: 21,
            name: 'Note 3',
            desc: ''
        }, {
            parent: 2,
            id: 22,
            name: 'S3',
            desc: ''
        }, {
            parent: 2,
            id: 23,
            name: 'S4',
            desc: ''
        }, {
            parent: 2,
            id: 24,
            name: 'S5',
            desc: ''
        }, {
            parent: 3,
            id: 24,
            name: 'Ipad 2',
            desc: ''
        }, {
            parent: 3,
            id: 24,
            name: 'Ipad 3',
            desc: ''
        }, {
            parent: 3,
            id: 24,
            name: 'Ipad 4',
            desc: ''
        }, {
            parent: 3,
            id: 24,
            name: 'Ipad Mini',
            desc: ''
        }, {
            parent: 3,
            id: 24,
            name: 'Ipad Mini 2',
            desc: ''
        }, {
            parent: 3,
            id: 24,
            name: 'Ipad Mini 3',
            desc: ''
        }, {
            parent: 3,
            id: 24,
            name: 'Ipad Air',
            desc: ''
        }

        ];
    }])

.filter('modelDropDown', function () {
        return function (modelSelect, deviceSelect) {
            var filtered = [];
            if (deviceSelect === null) {
                return filtered;
            }
            angular.forEach(modelSelect, function (s2) {
                if (s2.parent == deviceSelect) {
                    filtered.push(s2);
                }
            });
            return filtered;
        };
    });