// Module goes in this file.
(function(){

var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'partials/allItems.html',
		controller: "allController"
	});
	$routeProvider.when('/oneItem', {
		templateUrl:'partials/oneItem.html',
		controller: "oneController"
	});
	$routeProvider.otherwise({
		template: 'error'
	});
});



})();