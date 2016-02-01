'use strict';

// Declare app level module which depends on views, and components
var mySite = angular.module('mySite', ['ngRoute', 'mySiteServices']);

// define routes 
mySite.config(['$routeProvider', function($routeProvider) {
  	$routeProvider
	.when('/home', {
	    templateUrl : 'home/home.html',
	    controller  : 'HomeController'
	})
	.when('/portfolio', {
	    templateUrl : 'portfolio/portfolio.html',
	    controller  : 'PortfolioController'
	})
	.when('/portfolio/:id', {
	    templateUrl : "portfolio/project.html",
	    controller  : 'ProjectDetailsController'
	})
	.when('/resume', {
	    templateUrl : 'resume/resume.html',
	    controller  : 'ResumeController'
	})
	.when('/contact', {
	    templateUrl : 'contact/contact.html',
	    controller  : 'ContactController'
	})
	.otherwise({
		redirectTo: "/home"
	});
}]);