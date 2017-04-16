// ES6 module
const webpack = require('webpack');
const path =  require('path');

//
module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/app.js',
    ],
    /**
     * Output settings, dest file and file name
     */
    output: {
        path: path.resolve(__dirname, './build'), // Automatically created by webpack
        filename: 'app.bundle.js',
    },
    resolve: {
        extensions: [".html", ".webpack.js", ".web.js", ".js", ".json"],
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                },
            }
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
    ],
    devtool: "source-map",
};