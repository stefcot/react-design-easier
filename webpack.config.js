// ES6 module
const webpack = require('webpack');
const path =  require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./dist/css/[name].css');
/**
 * Originally taken from 'Getting Started with React and Redux'
 * by Alex Sears,
 * @see https://school.scotch.io/
 *
 * Enhanced using guidelines from 'Using Webpack for Production JavaScript Applications'
 * By Kent C. Dodds
 * @see https://egghead.io/
 *
 * 'package.json' file has also been modified to meet the needs
 * for a strongly structured project setup :
 * config validation, file treatment, overall project validation,
 * code linting, unit testing and pre-commit hooks.
 *
 * validate-webpack removed cause webpack2.0 supports its own validation
 *
 * NPM script commands have been defined: prestart, start,
 *
 * @param env {object} environnement object passed through webpack CLI command
 * @return {object}
 */
module.exports = env => {
    return {
        entry: [
            'react-hot-loader/patch',
            './src/app.js',
        ],
        /**
         * Output settings, dest file and file name
         */
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'app.bundle.js',
            pathinfo: !env.prod,
        },
        resolve: {
            extensions: [".html", ".webpack.js", ".web.js", ".js", ".json"],
        },
        devtool: !env.prod ? 'source-map' : 'eval',
        module: {
            loaders: [
                {
                    test: /\.html$/,
                    loader: 'file-loader?name=[name].[ext]',
                },
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015','react']
                    },
                },/*
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader'
                },*/
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: extractCSS.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader?sourceMap!sass-loader?sourceMap',
                    })
                },
                {
                    test: /\.(eot)|(ttf)|(woff)|(woff2)$/,
                    exclude: /node_modules/,
                    loader: 'url-loader?name=dist/fonts/[name].[ext]',
                }
            ]
        },

        plugins: [
            extractCSS, new webpack.NamedModulesPlugin(),
        ],
    }
};