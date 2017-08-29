(function() {
var app = angular.module("myApp");

// Define a controller named 'oneController'
app.controller("oneController", function($scope, $http, $routeParams) {
    console.log("testing oneController");
	var id = parseInt($routeParams.id);
	console.log("the ID is", id);
	
		
		
		
	
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
			
		// 2. put it on the scope. Call it item.	
		
		
		
	});
	
		
	
		
		
		
		
		
	
});
	


})();

// function findById(source, id) {
  // for (var i = 0; i < source.length; i++) {
    // if (source[i].id === id) {
      // return source[i];
    // }



//ex. code to find object in array by a property:
 // function FindTaskById(task) {

        // if (task.Id === this[0] {
            // return task;
        // }
    // }

    // var task = tasks.find(FindTaskById, ['4', '67']);
    // console.log(JSON.stringify(task));


//voting button will probably be on single view page only
	
// $http.post('/api/items', {'outdoorart':votes}).then(function success(response) {
		// $scope.items = response.data;
		// console.log(response.data)
	// });	
	
	// };

