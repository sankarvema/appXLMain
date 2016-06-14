var express  = require('express');
var app      = express();
var colors	 = require('colors');

var port     = process.env.PORT || 8080;

console.log(colors.blue('Application started successfully'));
