const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devServerConfig = require('./devServer.config');
const HWPConfig = require('./settingsLoadersAndPlugins/HtmlWebpackPluginConfig');
const cssLoader = require('./settingsLoadersAndPlugins/cssLoader')('development');
const lessLoader = require('./settingsLoadersAndPlugins/lessLoader');
const scssLoader = require('./settingsLoadersAndPlugins/scssLoader');
const styleOutput = require('./settingsLoadersAndPlugins/stylesOutput')('development');
const alias = require('./alias');
const _path_ = require('./__path');


const webPackConfigure = {
    devtool: "source-map",
    devServer: devServerConfig,
    entry: {
        app: [
            'react-hot-loader/patch',
            _path_.mainEntryPointPath,
        ]
    },
    output: {
        path: _path_.distBasePath,
        filename: '[name].build.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                enforce: 'pre',
                use: 'eslint-loader',
                include: [ _path_.srcBasePath ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
                include: [ _path_.srcBasePath ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [ styleOutput, cssLoader ],
                include: [ _path_.srcBasePath ]
            },
            {
                test: /\.(sa|sc)ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [ styleOutput, cssLoader, scssLoader('development') ],
                include: [ _path_.srcBasePath ]
            },
            {
                test: /\.less$/,
                exclude: /(node_modules|bower_components)/,
                use: [ styleOutput, cssLoader, lessLoader ],
                include: [ _path_.srcBasePath ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                use: [ { loader: 'url-loader', options: { limit: 10000 } } ]
            }
        ]
    },
    resolve: { alias },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin( HWPConfig('development') ),
        new InterpolateHtmlPlugin({ 'SOURCE_URL': '.' }),
        new CopyWebpackPlugin([
            { from: _path_.publicGetPath('favicon.ico'), to: _path_.distBasePath },
            { from: _path_.publicGetPath('manifest.json'), to: _path_.distBasePath },
        ])
    ]
};

module.exports = webPackConfigure;
