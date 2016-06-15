var path = require('path');
var webpack = require('webpack');
// var express = require('express');
var WebpackDevServer = require('webpack-dev-server');
// var webpackDevMiddleware = require('webpack-dev-middleware');
// var webpackHotMiddleware = require('webpack-hot-middleware');
// var app = express();
var config = require('./webpack.config');
// var testConfig = require('./test.webpack.config')
var port = config.port || 7000;
var options = { publicPath: config.output.publicPath, hot: true, historyApiFallback: true, };


// var compiler = webpack(config);
// app.use(webpackDevMiddleware(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));
// app.use(webpackHotMiddleware(compiler));
//
//
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// })
//
// app.listen(port, function(error){
//     if(error){
//         console.error(error);
//     }else {
//          console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
//     }
// })


var server = new WebpackDevServer(webpack(config), options);
server.listen(port, 'localhost', function (err, result) {
  if (err) console.error(err);
  console.log('Listening at localhost:%s', port);
});
