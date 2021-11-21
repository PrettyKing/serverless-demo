const path = require('path')
const dev = {
    entry: './src/index.ts',
    output: {
        filename: 'worker.js',
        path: path.join(__dirname, 'dist'),
    },
    devtool: 'cheap-module-source-map',
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    // transpileOnly is useful to skip typescript checks occasionally:
                    // transpileOnly: true,
                },
            },
        ],
    },
}

const webpackConfMap = {
    development: require("./webpack_config/webpack.development.js"),
    production: require('./webpack_config/webpack.production.js'),
    dev
}

console.log("======> ", process.env.NODE_ENV)

module.exports = webpackConfMap[process.env.NODE_ENV]
