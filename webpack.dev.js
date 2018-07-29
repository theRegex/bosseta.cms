const webpack = require("webpack");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");

module.exports =  {
    devtool: "inline-source-map",
    mode: "development",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new WebpackBuildNotifierPlugin({
            title: "Bosseta CMS",
            //successIcon: path.resolve("./logo.png"),
            suppressSuccess: false
        })
    ],
    watchOptions: {
        aggregateTimeout: 300
    }
}

