var path = require('path')

var ExtractTextPlugin = require('extract-text-webpack-plugin')

// multiple extract instances
var extractCSS = new ExtractTextPlugin('./css/[name].css')

var config = {
  entry: {
    app: path.resolve(__dirname, './src/main.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '/'
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
      {
        test: /\.scss$/i,
        loader: extractCSS.extract(['css', 'sass'])
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './css')]
  },
  plugins: [extractCSS]
}

module.exports = config
