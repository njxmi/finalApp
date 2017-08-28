(function() {
var app = angular.module("myApp");
console.log("testing allController");
// Define a controller named 'allController'
app.controller("allController", function($scope) {
    // Add the image called "img1.jpg" to the scope for now.
	console.log("I'm runnning");
    $scope.image = 'img1.jpg';
});

})();



