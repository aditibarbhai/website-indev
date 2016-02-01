mySite.controller('ResumeController', ['$scope', function($scope) {
  $scope.title = "Resume";

  $(".mdl-navigation").children().removeClass("selected");
  $(".resume-page").addClass("selected");
  // angular.element(document).ready( 
  //   function() {
  //     componentHandler.upgradeAllRegistered();
  // });
}]);