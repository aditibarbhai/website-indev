'use strict';

// Declare app level module which depends on views, and components
var mySite = angular.module('mySite', ['ngRoute']);

mySite.config(['$routeProvider', function($routeProvider) {
  	$routeProvider
	.when('/home', {
	    templateUrl : 'views/home.html',
	    controller  : 'HomeController'
	})
	.when('/projects', {
	    templateUrl : 'views/projects.html',
	    controller  : 'ProjectsController'
	})
	.when('/projects/:id', {
	    templateUrl : "views/entry.html",
	    controller  : 'ProjectDetailsController'
	})
	.when('/resume', {
	    templateUrl : 'views/resume.html',
	    controller  : 'ResumeController'
	})
	.when('/contact', {
	    templateUrl : 'views/contact.html',
	    controller  : 'ContactController'
	})
	.otherwise({
		redirectTo: "/home"
	});
}]);

mySite.run(function ($rootScope,$timeout) {
	$rootScope.$on('$viewContentLoaded', ()=> {
	  $timeout(() => {
	    componentHandler.upgradeAllRegistered();
	  })
	})
});