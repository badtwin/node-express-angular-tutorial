var TutorialApp = angular.module('TutorialApp', []);

TutorialApp.controller('MainCtrl', ['$scope', function($scope) {
	$scope.title = "Tutorial";
}]);