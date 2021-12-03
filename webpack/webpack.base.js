const path = require('path')

const { DefinePlugin } = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { isDev, isProd, rootDir } = require('./env.js')

const mode = isProd ? 'production' : 'development';

module.exports = {
	mode,
	target: [ 'web', 'es2015' ],
	entry : path.join(rootDir, './src/index.tsx'),
	output: {
		path: path.join(rootDir, './dist'),
		filename: '[name].[fullhash].js'
	},
	module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /node_modules/
            },
            {
                test: /\.(html)$/,
                use: [ 'html-loader' ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    isProd ? {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    } : {},
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(rootDir, './public/index.html'),
            filename: 'index.html',
            inject: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true
            }
        }),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(mode),
            },
            IS_PROD: isProd,
            IS_DEV: isDev
        }),
        new CopyPlugin({
            patterns: [ {
                from: path.join(rootDir, './src/assets'),
                to: 'assets'
            } ]
        })
    ],
    resolve: {
        alias : {
            '@src'       : path.join(rootDir, '/src'),
            '@images'    : path.join(rootDir, '/src/images'),
            '@styles'    : path.join(rootDir, '/src/styles'),
            '@components': path.join(rootDir, '/src/components'),
        },
        extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
    },
    optimization: {},
    externals: {}
}
