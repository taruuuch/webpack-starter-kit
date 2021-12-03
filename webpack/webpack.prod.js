const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin({})
        ]
    },
    plugins: [
        new CleanWebpackPlugin({}),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    }
};