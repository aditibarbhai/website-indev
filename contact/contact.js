mySite.controller('ContactController', ['$scope', function($scope) {
  $scope.title = "Contact";

  $(".mdl-navigation").children().removeClass("selected");
  $(".contact-link").addClass("selected");
}]);