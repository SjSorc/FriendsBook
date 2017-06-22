var path = require('path');

module.exports = {
    context: path.resolve('src'),
    entry: "./app.js",
    output: {
        path: path.resolve('dist/scripts/'),
        publicPath: '/public/assets/scripts/',
        filename: "bundle.js"
    },
    watch: true,
    devServer: {
        contentBase: 'public'
    }, 
    module: {
        preloaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}