(function() {
var app = angular.module("myApp");

// Define a controller named 'allController'
app.controller("allController", function($scope) {
    // Add the image called "img1.jpg" to the scope for now.
	console.log("testing allController");
    $scope.image = 'images/img1.jpg';
});

})();



