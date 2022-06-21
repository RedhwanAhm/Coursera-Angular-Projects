(function(){
   "use strict";

   angular.module("MsgApp", [])
   .controller("MsgController", MsgController);

   MsgController.$inject = ['$scope'];
   function MsgController($scope) {
    $scope.name = "Redhwan";

    $scope.sayMessage = function() {
        return "I like to focus on sleep and wellness at night."
    }

    $scope.stateOfPic = 0;
    $scope.stateOfBeing = "sleep";
    $scope.stateOfSleep = "Wake Redhwan Up";
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
    };
   }
})();