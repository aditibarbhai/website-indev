mySite.controller('PortfolioController', ['$scope', 'PortfolioService', function($scope, PortfolioService) {
    $scope.title = "Projects";
    $scope.projects = PortfolioService.getPortfolio();

    $(".mdl-navigation").children().removeClass("selected");
    $(".projects-page").addClass("selected");
}]);

mySite.controller("ProjectDetailsController", ['$scope', 'PortfolioService', '$routeParams', function($scope, PortfolioService, $routeParams) {
  var id = $routeParams.id;
  $scope.project = PortfolioService.getProject(id);

  $(".mdl-navigation").children().removeClass("selected");
  $(".projects-page").addClass("selected");
}]);

mySite.directive('projectTile', function() {
  return {
    templateUrl: 'portfolio/project-tile.html'
  };
});