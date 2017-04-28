// Load Module Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var debug = require('debug')('laboratory-api');
var mongoose = require('mongoose');
var config = require('./config');
var router  =require('./routes');
var validator = require('express-validator');


// Connect to Mongodb
mongoose.connect(config.MONGODB_URL);

// listen to connection event
mongoose.connection.on('connected', function mongodbConnectionListener() {
  debug('Mongodb Connected successfully');
});
// handle error event
mongoose.connection.on('error', function mongodbErrorListener() {
  debug('Connection to Mongodb Failed!!');

  // Try and Reconnect
  mongoose.connect(config.MONGODB_URL);

});

// Configuration

// Initialize app
var app = express();

// Set Middleware
app.use(bodyParser.json());

// Set Validator
app.use(validator());

// Set Routes
router(app);


// Listen to HTTP Port
app.listen(config.HTTP_PORT, function connectionListener() {
  debug('API Server running on port %s', config.HTTP_PORT);
});

//export app Module
module.exports=app;