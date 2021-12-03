const path = require('path')

const mode = process.env.NODE_ENV ?? 'production';
const isProd = mode === 'production';
const isDev = !isProd;
const rootDir = path.join(__dirname, '../');
const webpackDir = path.join(__dirname, '/');

module.exports = {
    mode,
    isDev,
    isProd,
    rootDir,
    webpackDir
}