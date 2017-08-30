(function() {
var app = angular.module("myApp");


// Define a controller named 'oneController'
app.controller("oneController", function($scope, $http, $routeParams) {
    console.log("testing oneController");
	var id = parseInt($routeParams.id); //routeParams gets id from the url, parse changes it from string to number
	console.log("the ID is", id);
	
		
		app.directive('longDesc', function(){
		return{
		template : "<p>{{item.title}}</p>",
		controller: "oneController"
		};
		console.log ("testing controller");
		});
		
	
	$http.get('/api/items').then(function success(response) {
	
		var items = response.data;
		console.log(items);
		
		var item = findItemById(items, id);
		console.log(item);
		
		$scope.item = item;
		
		
		// 1. find the matching item in the items array. by id
		function findItemById(items, id) {
			
			for (var i=0; i<items.length; i++){
				if (items[i].artid === id) { //property must match name in db here
					return items[i];		//return one object
				}
			}
		}
			
	});	
});
})();



