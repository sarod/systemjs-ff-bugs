'use strict';
System.register(['angular', 'normalize.css', 'angular-material/angular-material.css!', 'angular-material', 'my-side-nav/my-side-nav', 'my-app/my-app'], function(exports_1) {
    var ng, my_side_nav_1, my_app_1;
    var myAppModule;
    return {
        setters:[
            function (ng_1) {
                ng = ng_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (my_side_nav_1_1) {
                my_side_nav_1 = my_side_nav_1_1;
            },
            function (my_app_1_1) {
                my_app_1 = my_app_1_1;
            }],
        execute: function() {
            myAppModule = ng.module('myApp', ['ngMaterial']);
            my_side_nav_1.default(myAppModule);
            my_app_1.default(myAppModule);
            // bootstrap angular manually on whole document
            ng.element(document).ready(function () {
                ng.bootstrap(document, ['myApp']);
            });
        }
    }
});
//# sourceMappingURL=app-bootstrap.js.map