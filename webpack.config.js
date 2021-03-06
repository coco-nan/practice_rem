const path = require("path");

module.exports = {
    entry:"./src/app.js",
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,"dist")
    },
    module: {
        rules: [
           { 
               test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    }  

}