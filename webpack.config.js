var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './src/builds');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    entry: {
        family_view_create: APP_DIR + '/family_view_create.jsx'
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].bundle.js"
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};

module.exports = config;
