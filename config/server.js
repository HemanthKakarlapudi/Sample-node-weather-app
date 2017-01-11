// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Express server
var app = express();

// parse JSON data from client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use('/api', require('../config/routes/route.js'));

// app.get('/',function(req,res){
// 	res.send('HELLO WELCOME TO HEMANTH WORLD');
// });


// Start server
app.listen(8000);
console.log('API Started listening on 8000 with auto save');
