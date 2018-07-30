 "use strict"
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
                use: [
                    MiniCssExtractPlugin.loader,
                    { 
                        loader: 'css-loader', 
                        options: { url: false, sourceMap: true } 
                    }
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/build.css",
        })
    ],
    resolve: {
        extensions: ["*", ".js",".jsx"],
        alias: {
            strings: path.resolve(__dirname,'./strings'),
            styles: path.resolve(__dirname,'./styles'),
            semantic: path.resolve(__dirname,'./styles/semantic'),
            pages: path.resolve(__dirname,'./pages'),
            components: path.resolve(__dirname,'./components'),
            common: path.resolve(__dirname,'./common'),
            api: path.resolve(__dirname,'./api')
        }
    },
    cache: false,
    watch: buildWillWatch
};