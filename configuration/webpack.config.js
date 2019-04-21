const path = require('path');
const webpack = require('webpack');
const devServerConfig = require('./devServer.config');
const alias = require('./alias');
const _path_ = require('./__path');


const webPackConfigure = {
    mode: 'development',
    entry: _path_.mainEntryPointPath,
    output: {
        filename: 'main.js',
        path: _path_.distBasePath
    },
    resolve: {
        alias
    },
    devServer: devServerConfig
};


module.exports = webPackConfigure;
