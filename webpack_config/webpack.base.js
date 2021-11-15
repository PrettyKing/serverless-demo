const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, "../src/app.tsx")
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name].js',
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            favicon: path.resolve(__dirname, "../public/favicon.ico")
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
}
