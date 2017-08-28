(function() {
var app = angular.module("myApp");

// Define a controller named 'oneController'
app.controller("oneController", function($scope, dataStore) {
    // Add an image called "img2.jpg" to the scope for now.
    $scope.image = 'img2.jpg';
	$scope.data=dataStore.getData();
});

})();







