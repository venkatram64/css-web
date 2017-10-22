var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app_bundle.js',
        publicPath: '/'
    },
    module:{
        rules: [
            {test:/\.(js)$/, use: 'babel-loader'},
            {test:/\.(css)$/, use: ['style-loader','css-loader']},
            {test:/\.(jpe?g|png|gif|svg)$/i, 
                use:  [
                    'file-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true,
                            },
                        }
                    ]
                }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins:[ 
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}