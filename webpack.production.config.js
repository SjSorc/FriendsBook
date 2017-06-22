var WStripLoader = require('strip-loader');
var devConfig = require('./webpack.config');

var stripLoader = {
    test: /\.js$/,
    exclude: /node_module/,
    loader: WStripLoader.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;