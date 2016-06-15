var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');
var port = 7000;

module.exports = {
    port: port,
    devtool:'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:'+ port,
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './lib/index'
    ],
    output: {
        path:path.join(__dirname, '/dist'),
        publicPath: '/dist/'
    },
    plugins: [
       new webpack.DefinePlugin({
          'process.env': { NODE_ENV: JSON.stringify('development') }
       }),
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [ 'react-hot', 'babel-loader' ]
        },
        {
            test: /\.css$/,
            exclude: path.join(__dirname, 'src'),
            loader: 'style!css'
        },
        ],
    }


};
