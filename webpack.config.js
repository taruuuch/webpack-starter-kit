const path = require('path')

module.exports = {
	devtool: 'source-map',
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.sass$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
}
