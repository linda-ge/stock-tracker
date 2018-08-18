// server.js

// modules
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080;

// connect to mongoDB database
mongoose.connect(db.url);


app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);
console.log('Listening on port ' + port);

exports = module.exports = app;
