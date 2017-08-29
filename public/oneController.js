(function() {
var app = angular.module("myApp");

// Define a controller named 'oneController'
app.controller("oneController", function($scope, $http) {
    console.log("testing oneController");
	$scope.items = {};
	//displaying just first item in array for now
	$http.get('api/items').then(function success(response) {
    $scope.items = response.data;
	console.log(response.data[0]);
});
	
});

})();



