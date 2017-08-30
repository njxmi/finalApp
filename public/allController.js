(function() {
var app = angular.module("myApp");
app.directive('shortDesc', function(){
	return{
template: '<p>Title: {{item.title}}</p> <p>Artist: {{item.artist}}</p> <p>Location: {{item.streetaddress}}</p> <p>Description: {{item.shortdescription}}</p>'
	};	
});


//Below - add funtion to add Google Map with markers

	  
// Below defines a controller named 'allController'
app.controller("allController", function($scope, $http) {
	console.log("testing allController");
	$scope.items = {};
	
		


	
	$http.get('/api/items').then(function success(response) {
		$scope.items = response.data;
		console.log(response.data);
	}); //this loads data, could use to refresh page below

	
	//make a function for upVote and set it on the scope
	
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
	
});

		

})(); //closes IIFE



//formats for get, post:

// $http.get('/someUrl', config).then(successCallback, errorCallback);
// $http.post('/someUrl', data, config).then(successCallback, errorCallback);