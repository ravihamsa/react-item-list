/**
 * Created by ravi.hamsa on 6/22/16.
 */

var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'dist');

var config = {

    entry: ['./scripts/main.js'],

    devtool: 'inline-source-map' ,

    output: {

        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },

    externals: {
        // Use external version of React
        "react": "React",
        "react-dom": "ReactDOM"
    },

    module: {

        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                exclude: [nodeModulesPath]
            }

        ]
    }
}


module.exports = config