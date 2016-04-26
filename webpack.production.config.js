var path = require('path')

var webpack = require('webpack')

var ExtractTextPlugin = require('extract-text-webpack-plugin')

// multiple extract instances
var extractCSS = new ExtractTextPlugin('./css/[name].css')

var config = {
  entry: {
    app: path.resolve(__dirname, './src/main.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
       {test: /\.scss$/i, loader: extractCSS.extract(['css', 'sass'])}
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './css')]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({ 'process.env': {'NODE_ENV': '"production"'} }),
    extractCSS]
}

module.exports = config
