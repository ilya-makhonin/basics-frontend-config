const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

const devServerConfig = require('./configuration/devServer.config');
const babelConfig = require('./configuration/babel.config')();
const HWPConfig = require('./configuration/settingsForModeType/HtmlWebpackPluginConfig');

const alias = require('./configuration/alias');
const _path_ = require('./configuration/__path');


// Config for build a app with optimum settings
const buildConfig = require('./configuration/webpack.build.config');


// Light building. Without compress, minification, etc
const webPackConfigure = {
    devtool: "source-map",
    devServer: devServerConfig,
    entry: _path_.mainEntryPointPath,
    output: {
        filename: '[name].js',
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
                use: [ 'style-loader',  'css-loader' ],
                include: [ _path_.srcCSSPath ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
                include: [ _path_.srcSCSSPath ]
            },
            {
                test: /\.less$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
                include: [ _path_.srcLESSPath ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
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


module.exports = function(un, args){
    if (args.mode === 'development') {
        return webPackConfigure;
    }
    if (args.mode === 'production') {
        return buildConfig;
    }
};
