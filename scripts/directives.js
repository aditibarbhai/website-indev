'use strict';

mySite.directive("commonHeader", function () {
  return {
    restrict: "E",
    templateUrl: "views/header.html"
  };
});

mySite.directive("commonFooter", function() {
	return {
		restrict: "E",
		templateUrl: "views/footer.html"
	};
});