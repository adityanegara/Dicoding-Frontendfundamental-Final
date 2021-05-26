const path = require("path");

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
    }
}