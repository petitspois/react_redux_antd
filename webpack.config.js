var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
module.exports = {
    devtool: "#inline-source-map",
    resolve:{
        alias: {
            'react': pathToReact,
            'react-dom': pathToReactDOM
        }
    },
    output: {
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }],
        noParse: [pathToReact]
    }
};
