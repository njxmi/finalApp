(function() {
var app = angular.module("myApp");

// Define a controller named 'allController'
app.controller("allController", function($scope, $http) {
	console.log("testing allController");
	$scope.items = {};
	
	$http.get('/api/items').then(function success(response) {
		$scope.items = response.data;
		console.log(response.data);
	}); //this loads data, could use to refresh page below

	
	
	$scope.upVote = function(id) {
		console.log('clicked', id);
		var serverUrl =	('/api/items/' + id + '/votes');
		$http.put(serverUrl).then(function success(response) {
			$http.get('/api/items').then(function success(response) {
			$scope.items = response.data;
			console.log(response.data);
			}); //ideally would have a function you can call more than once, this was a quick way to make it work
		});	
		
	};

	
	// Example from assessment:
	// $http.get('http://api.example.com/florals')
           // .then(function success(response){
              // $scope.florals = response.data;
			// }
	
});

})();

//formats for get, post:

// $http.get('/someUrl', config).then(successCallback, errorCallback);
// $http.post('/someUrl', data, config).then(successCallback, errorCallback);