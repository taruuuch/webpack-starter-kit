const path = require('path')

module.exports = {
    devtool: 'cheap-module-source-map',
    plugins: [],
    devServer: {
        static: {
            directory : path.join(__dirname, 'public'),
        },
        port: process.env.PORT || 3000,
        headers: { 'Access-Control-Allow-Origin': '*' },
        liveReload: true,
        hot: false
    }
}