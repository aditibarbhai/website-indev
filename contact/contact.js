mySite.controller('ContactController', ['$scope', function($scope) {
  $scope.title = "Contact";

  $(".mdl-navigation").children().removeClass("selected");
  $(".contact-page").addClass("selected");
  // angular.element(document).ready( 
  //   function() {
  //     componentHandler.upgradeAllRegistered();
  // });
}]);