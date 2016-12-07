var express = require('express')
var url = require('url')
var app = express()

app.get('/', function(req, res) {
    res.send('Enter date as a URL parameter to receive a timestamp back eg. https://api-projects-kriegerfaust.c9users.io/December%2015,%202015')
})

app.get('/:input', function(req, res) {
    var input = req.params.input;
    res.send(input);
})

app.listen(process.env.PORT || 8080, function() {
    console.log('Listening...');
})