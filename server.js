var colors	 = require('colors');
var express  = require('express');
var app      = express();

var constants     	= require('./customize/paths');
var stringX   			= require(constants.paths.utils + '/stringX');
var appServ   			= require(constants.paths.services + '/app');
var config        	= require(constants.paths.customize + '/config');

var port     = config.get("web.http.port");

var util = require('./utils/stringX');

var appInfo = appServ.info();

console.log(colors.blue(stringX.format("\nApplication: %s ver %s:%s", appInfo.name, appInfo.version, appInfo.gitHash )));
console.log(colors.blue(stringX.format('   running at port %s', port)));
