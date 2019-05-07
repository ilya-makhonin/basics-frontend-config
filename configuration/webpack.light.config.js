const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

const devServerConfig = require('./devServer.config');
const HWPConfig = require('./settingsForModeType/HtmlWebpackPluginConfig');
const babelConfig = require('./babel.config')();
const cssLoader = require('./settingsForModeType/cssLoader')('development');
const lessLoader = require('./settingsForModeType/lessLoader');
const scssLoader = require('./settingsForModeType/scssLoader');
const styleOutput = require('./settingsForModeType/stylesOutput')('development');

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
        filename: 'main.build.js',
        path: _path_.distBasePath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                enforce: 'pre',
                use: 'eslint-loader',
                include: [ _path_.srcBasePath ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: babelConfig,
                include: [ _path_.srcBasePath ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [ styleOutput, cssLoader ],
                include: [ _path_.srcCSSPath ]
            },
            {
                test: /\.(sa|sc)ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [ styleOutput, cssLoader, scssLoader('development') ],
                include: [ _path_.srcSCSSPath ]
            },
            {
                test: /\.less$/,
                exclude: /(node_modules|bower_components)/,
                use: [ styleOutput, cssLoader, lessLoader ],
                include: [ _path_.srcLESSPath ]
            },
            { loader: 'html-loader', options: { attrs: [] } },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                use: [ { loader: 'url-loader', options: { limit: 10000 } } ]
            }
        ]
    },
    resolve: { alias },
    plugins: [
        new HtmlWebpackPlugin( HWPConfig('development') ),
        new InterpolateHtmlPlugin({ 'SOURCE_URL': 'assets' }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = webPackConfigure;
