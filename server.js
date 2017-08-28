//modify for final app

var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');

var app = express();
// This allows us to accept JSON bodies in POSTs and PUTs.
app.use(bodyParser.json());

app.use(express.static('public'));

// Set up a connection pool with which to access the database in all the
// operations below.
var pool = new pg.Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "postgres",
    ssl: false
});

// GET /items - responds with an array of all info in the database.
app.get('/items', function(req, res) {
    pool.query("SELECT * FROM outdoorart").then(function(result) {
        res.send(result.rows);
    }).catch(errorCallback(res));
});

// GET /rooms/{ID} - responds with the one matching room from the database.
app.get('/items/:votes', function(req, res) {
    var id = req.params.votes; // <-- This gets the :id part of the URL
    pool.query("SELECT * FROM outdoorart WHERE votes = $1::int", [votes]).then(function(result) {
        if (result.rowCount === 0) {
            res.status(404); // 404 Not Found
            res.send("NOT FOUND");
        } else {
            // Return the first result. There should only be one.
            res.send(result.rows[0]);
        }
    }).catch(errorCallback(res));
});

// PUT /rooms/{votes} - modify value of votes in the database. The item is upvoted or downvoted 
//by a button on the web page
app.put('/items/:votes', function(req, res) {
    var id = req.params.votes; // <-- This gets the :votes part of the URL
    var room = req.body; // <-- Get the parsed JSON body
    var sql = "UPDATE Items SET votes = $2::text, capacity = $3::int, available = $4::boolean " +
              "WHERE id = $1::int";
    var values = [votes, items.title];

    pool.query(sql, values).then(function() {
        res.send("UPDATED");
    }).catch(errorCallback(res));
});


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
