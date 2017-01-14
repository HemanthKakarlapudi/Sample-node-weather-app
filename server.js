// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Express server
var app = express();

// parse JSON data from client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/Sample-node-weather-app'));

app.use('/lib', express.static(__dirname + '/app/lib'));
app.use('/js', express.static(__dirname + '/app/js'));

app.use('/partials', express.static(__dirname + '/app/partials'));
// Routes
//app.use('/api', require('../config/routes/route.js'));

app.get('/', function(req, res) {
     res.sendFile(__dirname + '/app/index.html');
});

// app.get('/',function(req,res){
// 	res.send('HELLO WELCOME TO HEMANTH WORLD');
// });


// Start server
app.listen(7000);
console.log('API Started listening on 7000 with auto save');
