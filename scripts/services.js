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
        console.log(projectsList[id]);
        return projectsList[id];
    };
    
    readProjects();

    return {
        getPortfolio: getPortfolio,
        getProject: getProject
    };
 }]);