const webpack = require('webpack');
const path = require('path');
const MINIFY = JSON.parse(process.env.MINIFY || '0');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins = [
  new HtmlWebpackPlugin({
    filename: 'default.html',
    template: 'src/builds/default.html',
    chunks: ['default'],
    inject: 'head'
  }),
];

if (MINIFY) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true,
    mangle: true,
    comments: false
  }));
}

const config = {
    entry: {
      'default': './src/builds/default.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
        libraryTarget: 'var',
        library: 'ReactGraphData'
    },
    devtool: 'source-map',
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                exclude: /node_modules/,
                loader : 'babel-loader'
            }
        ]
    },
    plugins: plugins
};

module.exports = config;
