const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    chunkFilename: '[name].chunk.js'
  },
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './src'),
    compress: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    port: 7777,
    host: '0.0.0.0',
    hot: true,
    index: './src/index.html',
    overlay: true,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, include: path.join(__dirname, './src'), loader: 'babel-loader' },
      { test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  mode: 'development'
}