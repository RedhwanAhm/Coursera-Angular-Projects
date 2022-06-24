(function(){
   "use strict";

   angular.module("MsgApp", [])
   .controller("MsgController", MsgController);

   MsgController.$inject = ['$scope', '$filter'];
   function MsgController($scope, $filter) {
    $scope.name = "Redhwan";

    $scope.sayMessage = function() {
        var msg = "I like to chillax before I sleep";
        var output = $filter('uppercase')(msg);
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
    };
   }
})();