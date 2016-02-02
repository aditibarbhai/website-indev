mySite.controller('ResumeController', ['$scope', function($scope) {
  $scope.title = "Resume";

  $(".mdl-navigation").children().removeClass("selected");
  $(".resume-link").addClass("selected");
}]);