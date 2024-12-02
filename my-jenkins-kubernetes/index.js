var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage ...")
    res.send('{ "response": "Welcome to ..." }');
});

app.get('/will', function (req, res) {
    console.log("Got a GET request for /will ...")
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    console.log("Got a GET request for /ready ...")
    res.send('{ "response": " Great!, It works!" }');
});

var server = app.listen(process.env.PORT || 3000, function() {
    // var host = server.address().address; // ERROR string
    var port = server.address().port;
    console.log("App listening at http://127.0.0.1:%s", port)
});

module.exports = app; 

