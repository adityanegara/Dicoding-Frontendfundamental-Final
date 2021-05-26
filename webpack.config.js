const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "bundle.js"
    },
    mode: "production",
    module: {
        rules: [
            // Style and css loader
            {
                test: /\.css$/,
                use: [
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            },
            // Babel loader
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options:{
                            presets:["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    },
    // plugin
    plugins : [
        // html webpack plugin
        new HtmlWebpackPlugin({
            template : "./src/template.html",
            filename : "index.html"
        })
    ]
}