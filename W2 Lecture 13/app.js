(function(){
   "use strict";

   angular.module("MsgApp", [])
   .controller("MsgController", MsgController)
   .filter('loves', LovesFilter)
   .filter('truth', TruthFilter);

   MsgController.$inject = ['$scope', '$filter', 'lovesFilter'];
   function MsgController($scope, $filter, lovesFilter) {
    $scope.name = "Redhwan";

    $scope.sayMessage = function() {
        var msg = "I like to chillax before I sleep";
        var output = $filter('uppercase')(msg);
        return output
    }

    $scope.sayLovesMessage = function() {
        var msg = "I likes to chillax before I sleep";
        var output = lovesFilter(msg);
        return output
    }

    $scope.stateOfPic = 0;
    $scope.stateOfBeing = "sleep";
    $scope.stateOfSleep = "Wake Redhwan Up";
    $scope.cookieCost = .45;
    $scope.wakeRedhwan = function() {
        if($scope.stateOfPic == 0) {
            $scope.stateOfPic = 1;
            $scope.stateOfBeing = "woke";
            $scope.stateOfSleep = "Okay go back to sleep";
        } else {
            $scope.stateOfPic = 0;
            $scope.stateOfBeing = "sleep";
            $scope.stateOfSleep = "Wake Redhwan Up";
        }
        $scope.cookieCost += $scope.cookieCost;
    };
   }
   // Filter factories should be outside of the controller function.
   function LovesFilter() {
    return function(input) {
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
    }
   };

   function TruthFilter () {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
   };
})();