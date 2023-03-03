const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve('src', 'index.jsx'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    /node_modules/,
                    /data/
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: [
                    /node_modules/,
                    /data/
                ],
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            favicon: path.join(__dirname, 'src', 'favicon.png')
        }),
    ],
    devServer: {
        //host: '192.168.178.21',
        port: 8080
    }
};