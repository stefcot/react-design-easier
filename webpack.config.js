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
        path: path.resolve(__dirname, './build'), // Automatically crated by webpack
        filename: 'app.bundle.js',
    },
    resolve: {
        extensions: [".html", ".webpack.js", ".web.js", ".js", ".json"],
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.svg$/,
                loader: 'react-svg?jsx=1',
                query: {
                    jsx: true
                }
            },
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
    ],
    devtool: "source-map",
};