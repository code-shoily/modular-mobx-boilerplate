var path = require('path');
var webpack = require('webpack');

var LessPluginCleanCSS = require('less-plugin-clean-css');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    alias: {
      'base': __dirname + '/src/base',
      'counter': __dirname + '/src/counter',
      'todo': __dirname + '/src/todo',
    }
  },
  lessLoader: {
    lessPlugins: [
      new LessPluginAutoPrefix({ browsers: ['last 2 versions'] }),
      new LessPluginCleanCSS({ advanced: true })
    ]
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.AggressiveMergingPlugin()
  ],
};