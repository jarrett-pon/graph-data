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

const defaultConfig = {
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

const packagedConfig = {
  entry: './src/app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module : {
      loaders : [
          {
              test : /\.jsx?/,
              exclude: /node_modules/,
              loader : 'babel-loader'
          }
      ]
  },
  externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
}

module.exports = [defaultConfig, packagedConfig];
