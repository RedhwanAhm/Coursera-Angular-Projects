(function(){
    "use strict";

    angular.module("FoodAmount", [])
    .controller("FoodAmountController", FoodAmountController);

    FoodAmountController.$inject = ["$scope"];
    function FoodAmountController ($scope) {
        $scope.verdict = "";
        $scope.text = "";
        $scope.length = 0;
        $scope.AmountCalc = function () {
            if($scope.text.split(0) != "") {
                $scope.length = parseInt($scope.text.split(",").length);
            } else {
                $scope.length = 0;
            }
                
            if($scope.length > 0 && $scope.length <= 3) {
                $scope.verdict = "Enjoy!"
            } else if($scope.length > 3) {
                $scope.verdict = "Too Much!"
            } else {
                $scope.verdict = "Nothing Entered..."
            }
        }
    }

})();