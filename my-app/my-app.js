'use strict';
System.register([], function(exports_1) {
    var MyAppController;
    function registerMyApp(appModule) {
        appModule.controller('MyAppController', MyAppController);
        appModule.directive('myApp', function () {
            return {
                bindToController: {},
                controller: 'MyAppController',
                controllerAs: 'vm',
                templateUrl: './my-app/my-app.html',
                restrict: 'E',
                scope: {}
            };
        });
    }
    exports_1("default", registerMyApp);
    return {
        setters:[],
        execute: function() {
            MyAppController = (function () {
                function MyAppController($mdSidenav, $log) {
                    this.$mdSidenav = $mdSidenav;
                    this.$log = $log;
                    this.appName = 'MyApp';
                    $log.log('MyAppController created');
                }
                MyAppController.prototype.toggleLeft = function () {
                    this.$mdSidenav('left').toggle();
                };
                MyAppController.prototype.handleButtonClick = function () {
                    this.$log.log('Button Clicked');
                };
                return MyAppController;
            })();
        }
    }
});
//# sourceMappingURL=my-app.js.map