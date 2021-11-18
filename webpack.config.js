// const devWebpackConfig = require("./webpack_config/webpack.development.js")
// const proWebpackConfig = require('./webpack_config/webpack.production.js')
// console.log("====>",process.env.NODE_ENV)
// module.exports = process.env.NODE_ENV == 'development' ?  devWebpackConfig : proWebpackConfig


const path = require('path')

module.exports = {
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
