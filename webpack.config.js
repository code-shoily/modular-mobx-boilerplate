require('babel-polyfill')

var path = require('path')
var webpack = require('webpack')

var LessPluginCleanCSS = require('less-plugin-clean-css')
var LessPluginAutoPrefix = require('less-plugin-autoprefix')

var host = (process.env.HOST || 'localhost')
var port = process.env.PORT || 3000

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'webpack-dev-server/client?http://' + host + ':' + port,
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
  },
  lessLoader: {
    lessPlugins: [
      new LessPluginAutoPrefix({ browsers: ['last 2 versions'] }),
      new LessPluginCleanCSS({ advanced: true }),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!less',
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
        },
      }),
  ],
}
