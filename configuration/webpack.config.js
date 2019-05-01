const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const devServerConfig = require('./devServer.config');
const babelConfig = require('./babel.config')();
const alias = require('./alias');
const _path_ = require('./__path');


const webPackConfigure = {
    mode: 'development',
    devtool: "source-map",
    devServer: devServerConfig,
    entry: _path_.mainEntryPointPath,
    output: {
        filename: '[name][hash].build.js',
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
                            sourceMap: true
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
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name(file) {
                                if (process.env.NODE_ENV === 'development') {
                                    return '[name].[ext]';
                                }
                                return '[name][hash].[ext]';
                            },
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
        new HtmlWebpackPlugin({
            // favicon: _path_.publicFaviconPath,
            // filename: 'index.html',
            // path: _path_.distBasePath,
            template: _path_.publicHTMLPath,
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        }),
        new InterpolateHtmlPlugin(HtmlWebpackPlugin,{ 'PUBLIC_URL': 'assets' }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath: _path_.publicBasePath,
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};


module.exports = webPackConfigure;
