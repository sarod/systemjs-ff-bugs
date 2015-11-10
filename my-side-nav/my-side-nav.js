'use strict';
System.register([], function(exports_1) {
    var MySideNavController;
    function directiveFactory() {
        return {
            bindToController: {},
            controller: 'MySideNavController',
            controllerAs: 'vm',
            templateUrl: './my-side-nav/my-side-nav.html',
            restrict: 'E',
            scope: {}
        };
    }
    function registerMySideNav(appModule) {
        appModule.controller('MySideNavController', MySideNavController);
        appModule.directive('mySideNav', directiveFactory);
    }
    exports_1("default", registerMySideNav);
    return {
        setters:[],
        execute: function() {
            MySideNavController = (function () {
                function MySideNavController($mdSidenav, $log) {
                    this.$mdSidenav = $mdSidenav;
                    this.$log = $log;
                    $log.log('MySideNavController created');
                }
                MySideNavController.prototype.close = function () {
                    this.$mdSidenav('left').close();
                };
                return MySideNavController;
            })();
        }
    }
});
//# sourceMappingURL=my-side-nav.js.map