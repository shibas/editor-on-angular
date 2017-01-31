'use strict';

var webpack = require('webpack');
var path = require('path');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var event = process.env.npm_lifecycle_event;
var ENV = 'develop';
if (event === 'build') {
    ENV = 'production';
} else if (event === 'test' || event === 'test:watch') {
    ENV = 'test';
}

module.exports = {
    entry: {
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/[name].js",
        publicPath: "/public/",
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        root: __dirname + 'src/',
        extensions: ["", ".ts", ".js"]
    },
    module: {
        loaders: [{
                test: /\.ts?$/,
                loaders: ["ts-loader", 'angular2-template-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html?-minimize',
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            {
                test: /\.css$/,
                loaders: [
                    ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: 'css-loader' }),
                    'to-string-loader',
                    'css-loader?sourceMap'
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify(ENV)
            }
        }),
        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            template: helpers.root('public/index.html'),
            chunksSortMode: 'dependency'
        })
    ]
};