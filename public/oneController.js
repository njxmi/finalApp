(function() {
var app = angular.module("myApp");

// Define a controller named 'oneController'
app.controller("oneController", function($scope) {
    // Add an image called "img2.jpg" to the scope for now.
	console.log("testing oneController");
    $scope.image = 'images/img2.jpg';
});

})();







