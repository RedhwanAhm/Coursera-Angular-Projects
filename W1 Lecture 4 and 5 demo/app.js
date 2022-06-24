(function () {
    'use strict';

    angular.module('myApp', []) //myApp bound to html.
        .controller("myController", function ($scope) {
            $scope.name = "Redhwan"
            $scope.sayHello = function () {
                return "Hello Coursera!";
            }
        })
})();