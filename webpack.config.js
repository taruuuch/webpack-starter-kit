const { merge } = require('webpack-merge');

const baseConfig = require('./webpack/webpack.base.js');
const devConfig = require('./webpack/webpack.dev.js');
const prodConfig = require('./webpack/webpack.prod.js');

const { isProd } = require('./webpack/env.js');

module.exports = () => isProd ? merge(baseConfig, prodConfig) : merge(baseConfig, devConfig);
