var mySiteServices = angular.module('mySiteServices', ['ngResource']);

mySiteServices.factory('PortfolioService', [function() {
   var projectsList = [];

    var readProjects = function(newObj) {
        jQuery.getJSON("portfolio/portfolio.json.txt", function(data) {
          var projects = data.projects;
          jQuery.each(projects, function(i, val) {
            projectsList.push(val);
          });
        });
    };

    var getPortfolio = function() {
        return projectsList;
    }

    var getProject = function(id){
        return projectsList[id];
    };
    
    readProjects();

    return {
        getPortfolio: getPortfolio,
        getProject: getProject
    };
 }]);

mySiteServices.factory('MenuService', [function() {
    var currentPage = "Home";

    var setPage = function(newPageName) {
        currentPage = newPageName;
    }

    var getPage = function() {
        return currentPage;
    }

    return {
        setPage: setPage,
        getPage: getPage
    };
 }]);