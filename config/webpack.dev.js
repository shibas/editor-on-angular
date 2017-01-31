var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

var webpack = require('webpack');
var path = require('path');

//var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: '#eval-source-map',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].js",
    publicPath: "http://localhost:11221/",
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 11221,
    hot: true,
    inline: true
  }
});
