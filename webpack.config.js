'use strict';

var event = process.env.npm_lifecycle_event;
var ENV = 'develop';
if (event === 'build') {
  ENV = 'production';
} else if (event === 'test' || event === 'test:watch'){
  ENV = 'test';
}

if (ENV === 'production') {
  var config = require('./config/webpack.prod');
} else if (ENV === 'test'){
  var config = require('./config/webpack.test');
} else {
  var config = require('./config/webpack.dev');
}

module.exports = config;
