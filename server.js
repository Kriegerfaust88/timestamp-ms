var express = require('express')
var url = require('url')
var path = require('path')
var app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/:input', function(req, res) {
    var input = req.params.input;
    var validDate = (new Date(input)).getTime() > 0;
    var isNum = !isNaN(input);
    var result
    
    //If input parameter is a valid natural language date, convert it to UNIX and output the JSON
    if (validDate) {
        var asUnix = Date.parse(input);
        result = JSON.stringify({"unix": parseInt(asUnix), "natural": input});
    } 
    //If input parameter is not a valid natural language date but is a valid number, covert the number to a natural language date and output the JSON   
    else if (isNum) {
        var asDate = new Date(parseInt(input));
        var formatted = asDate.toDateString();
        result = JSON.stringify({"unix": parseInt(input), "natural": formatted});
    } 
    //If input parameter is neither a natural language date or a number, output JSON with both values as 'null'   
    else {
        result = JSON.stringify({"unix": null, "natural": null});
    }
    
    res.send(result)
})

app.listen(process.env.PORT || 8080, function() {
    console.log('Listening...');
})