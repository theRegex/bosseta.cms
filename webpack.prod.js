 'use strict'
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    plugins: [
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
            uglifyOptions: {
                ecma: 5,
                ie8:false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    watch:false
}

