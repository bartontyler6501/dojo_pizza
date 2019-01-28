
const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
path = require('path');

app.use(express.static(__dirname+'/public/dist/public'));
app.use(bodyParser.json());

require('./routes.js')(app);
 

app.listen(8000, function() {
console.log("listening on port 8000!");
})