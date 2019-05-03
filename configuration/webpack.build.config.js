const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const HWPConfig = require('./settingsForModeType/HtmlWebpackPluginConfig');
const babelConfig = require('./babel.config')();

const alias = require('./alias');
const _path_ = require('./__path');


const buildConfig = {
    // optimization: {
    //     minimizer: [
    //         new TerserPlugin({
    //             test: /\.js(\?.*)?$/i,
    //             exclude: /(node_modules|bower_components)/,
    //             include: /\/src/
    //         })
    //     ]
    // },
    devtool: "hidden-source-map",
    entry: _path_.mainEntryPointPath,
    output: {
        filename: '[name].build.js',
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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // import: true,
                            camelCase: true,
                            sourceMap: true,
                        },
                    }
                ],
                include: [ _path_.srcCSSPath ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            implementation: require('sass')
                        }
                    }
                ],
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
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: _path_.distImagesPath,
                            publicPath: _path_.srcImagesPath
                        }
                    },
                ]
            }
        ]
    },
    resolve: { alias },
    plugins: [
        new HtmlWebpackPlugin(HWPConfig('production')),
        new InterpolateHtmlPlugin({ 'SOURCE_URL': 'assets' }),
        new ManifestPlugin({ fileName: 'assets-manifest.json' }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};


module.exports = buildConfig;
