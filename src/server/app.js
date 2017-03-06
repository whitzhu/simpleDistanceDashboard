var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');

var app = express();

// Router
var router = require('./routes.js');

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/distance', router);


app.use(express.static(__dirname + '/../public'));

// Set what we are listening on.
app.set('port', 3000);

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}