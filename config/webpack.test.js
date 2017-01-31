var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

var webpack = require('webpack');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',
  entry: {},
  output: {},
  plugins : []
});
