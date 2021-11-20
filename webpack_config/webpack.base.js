const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, "../src/index.ts")
    },
    output: {
        path: path.resolve(__dirname, '../dist/web/'),
        filename: '[name].js',
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
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
        alias: {
            "@assets": path.resolve("src/assets"),
            "@components": path.resolve("src/components"),
            "@models": path.resolve("src/models"),
            "@routes": path.resolve("src/routes"),
            "@pages": path.resolve("src/pages"),
            "@utils": path.resolve("src/utils"),
            "@recoil": path.resolve("src/recoil"),
            "@hooks": path.resolve("src/hooks"),
            "@api": path.resolve("src/api"),
        },
        extensions: [".js", ".ts", ".tsx", '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            favicon: path.resolve(__dirname, "../public/favicon.ico")
        }),
        // new WorkboxPlugin.GenerateSW({
        //     clientsClaim: true,
        //     skipWaiting: true
        // })
    ]
}
