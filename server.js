// server.js

// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// configuration

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080;

// connect to mongoDB database
mongoose.connect(db.url);

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);
console.log('Magic happens on port ' + port);

exports = module.exports = app;
