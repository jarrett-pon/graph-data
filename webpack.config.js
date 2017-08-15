var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './src/builds');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    entry: {
        index: APP_DIR + '/default.jsx'
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].bundle.js",
        libraryTarget: 'var',
        library: 'ReactGraphData'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    },
    plugins: [
       new webpack.optimize.UglifyJsPlugin({minimize: true})
   ]
};

module.exports = config;
