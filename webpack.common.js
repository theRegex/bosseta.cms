 "use strict"
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin");

const buildWillWatch = !(process.env.NODE_ENV === "production");

module.exports = {
    entry: [
        "babel-polyfill",
         "./main.js"
    ],
    output: {
        path: path.resolve(__dirname + "/public/build"),
        filename: "app.js",
        publicPath:"./"
    },
    performance: {
        hints: false, 
        maxAssetSize: 250000, 
        maxEntrypointSize: 450000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader" , "eslint-loader"]
            },
            {
                test: /\.css$/,
                use:  ExtractTextPlugin.extract({
                    fallback: "style-loader?sourceMap",
                    use: "css-loader?modules,localIdentName='\[name]-[local]-[\hash\:base64:6]'"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(path.resolve(__dirname + "./public/css/bundle.css"))
    ],
    resolve: {
        extensions: ["*", ".js",".jsx"],
        alias: {
            strings: path.resolve(__dirname,'./strings'),
            styles: path.resolve(__dirname,'./styles'),
            pages: path.resolve(__dirname,'./pages'),
            components: path.resolve(__dirname,'./components'),
            common: path.resolve(__dirname,'./common'),
            api: path.resolve(__dirname,'./api')
        }
    },
    cache: false,
    watch: buildWillWatch
};