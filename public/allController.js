(function() {
var app = angular.module("myApp");

// Define a controller named 'allController'
app.controller("allController", function($scope, $http) {
	console.log("testing allController");
	$scope.items = {};
	
	$http.get('/api/items').then(function success(response) {
		$scope.items = response.data;
		console.log(response.data);
	});
	
// $http.post('/api/items', {'outdoorart':votes}).then(function success(response) {
		// $scope.items = response.data;
		// console.log(response.data)
	// });	
	
	// };

	
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