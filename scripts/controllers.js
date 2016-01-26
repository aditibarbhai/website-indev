'use strict';

mySite.directive("commonHeader", function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'close': '&onClose'
    },
    templateUrl: 'header.html'
  };
});

mySite.controller('HomeController', ['$scope', function($scope) {
  $scope.title = "Hello,";
  $scope.photoUrl = "images/coco.jpg";
  $scope.aboutMe = "I'm a full stack web developer, with a focus in front end development. I am a constant leaner who is looking to contribute and grow my skills. I am passionate about creating a great user experience.";
  $scope.bio = "I graduated from the University of Toronto with a Honours Bachelor of Science in Computer Science and Genetics Biotechnology. My internships during university focused mainly on web development, and I have continued that focus in my work after graduating. These days, I code mostly with JavaScript, HTML, and CSS with a focus on front end development and UX";
  $scope.skills = [
  	"JavaScript",
  	"jQuery",
  	"HTML(5)",
  	"CSS(3)",
  	"Less",
  	"AngularJS",
  	"knockoutJS",
  	"Python",
  	"PHP",
  	"Java",
  	"C#"
  ];

  $(".mdl-navigation").children().removeClass("selected");
  $(".home-page").addClass("selected");
  // angular.element(document).ready( 
  //   function() {
  //     componentHandler.upgradeAllRegistered();
  // });
}]);

mySite.controller('ProjectsController', ['$scope', function($scope) {
  $scope.title = "Projects";
  $scope.projects = [];

  // $.getJSON("portfolio/portfolio.json.txt", function(data) {
  //   var projects = data.projects;
  //   $.each(projects, function(i, val) {
  //     $scope.projects.push(val);
  //   });
  // });

  $(".mdl-navigation").children().removeClass("selected");
  $(".projects-page").addClass("selected");
  // angular.element(document).ready( 
  //   function() {
  //     componentHandler.upgradeAllRegistered();
  // });
}]);

mySite.controller("ProjectDetailsController", ['$scope', '$routeParams', function($scope, $routeParams) {
  var id = $routeParams.id;
  $scope.project = {};
  // $.getJSON("portfolio/portfolioDetails.json.txt", function(data) {
  //     $scope.project = data.projectDetails[id];
  // });

  $(".mdl-navigation").children().removeClass("selected");
  $(".projects-page").addClass("selected");
  // angular.element(document).ready( 
  //   function() {
  //     componentHandler.upgradeAllRegistered();
  // });
}]);

mySite.controller('ResumeController', ['$scope', function($scope) {
  $scope.title = "Resume";

  $(".mdl-navigation").children().removeClass("selected");
  $(".resume-page").addClass("selected");
  // angular.element(document).ready( 
  //   function() {
  //     componentHandler.upgradeAllRegistered();
  // });
}]);

mySite.controller('ContactController', ['$scope', function($scope) {
  $scope.title = "Contact";

  $(".mdl-navigation").children().removeClass("selected");
  $(".contact-page").addClass("selected");
  // angular.element(document).ready( 
  //   function() {
  //     componentHandler.upgradeAllRegistered();
  // });
}]);