const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    entry: "./example/src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve( __dirname, 'example', 'dist' ),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./example/src/template.html",
            filename: "./index.html"
        })
    ]
};