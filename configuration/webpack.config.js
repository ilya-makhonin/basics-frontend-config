const path = require('path');
const webpack = require('webpack');
const devServerConfig = require('./devServer.config');
const alias = require('./alias');
const _path_ = require('./__path');


const webPackConfigure = {
    mode: 'development',
    entry: _path_.mainEntryPointPath,
    output: {
        filename: '[name].[hash].build.js',
        path: _path_.distBasePath
    },
    module: {
        rules: [
            // Place for rules of compiling...
        ]
    },
    resolve: {
        alias,
        plugins: [
            // Place for app' plugins
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "source-map",
    devServer: devServerConfig
};


module.exports = webPackConfigure;
