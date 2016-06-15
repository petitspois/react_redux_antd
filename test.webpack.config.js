var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:3002',
    'webpack/hot/only-dev-server',
    './lib/index' // your entry point
  ],
  output: { path: __dirname + '/dist', publicPath: '/dist/' },
  plugins: [ new webpack.HotModuleReplacementPlugin(), ],
  module: {
    loaders: [ { test: /\.js$/, exclude: /node_modules/, loaders: [ 'react-hot', 'babel-loader' ] },{
        test: /\.css$/,
        loader: 'style!css'
    }, ]
  }
};
