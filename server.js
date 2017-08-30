//modify for final app
var pool = require("./pg-connection-pool");

var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');

var app = express();
// This allows us to accept JSON bodies in POSTs and PUTs.
app.use(bodyParser.json());

app.use(express.static('public'));

//1. get the query working in pgAdmin
//2. make the /items endpoint
//3. test the /items endpoint with postman
//4. in controller, use $http to get the JSON data from the /items endpoint (a.k.a. URL) and set it on the scope.

// GET /api/items - responds with an array of all info in the database.
app.get('/api/items', function(req, res) {
    pool.query("SELECT * FROM outdoorart ORDER BY votes DESC").then(function(result) {
        res.send(result.rows);
    }).catch(errorCallback(res));
});



// PUT api/items/{votes} - modify value of votes in the database. The item is upvoted 
// by a button on the web page

app.put('/api/items/:id/votes', function(req, res) {
	
	
	
	console.log('nailed it');
    var id = req.params.id; // <-- This gets the :id part of the URL
    var sql = "UPDATE outdoorart SET votes = votes + 1 WHERE artid = $1::int";
    var values = [id];

    pool.query(sql, values).then(function() {
        res.send("UPDATED");
    }).catch(errorCallback(res));
});

//function is called upVote() on view;


function errorCallback(res) {
    return function(err) {
        console.log(err);
        res.status(500); // 500 Server Error
        res.send("ERROR!");
    }
}

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('JSON Server is running on ' + port);
});


