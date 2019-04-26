const path = require('path');
const webpack = require('webpack');
const devServerConfig = require('./devServer.config');
const alias = require('./alias');
const _path_ = require('./__path');


const webPackConfigure = {
    mode: 'development',
    entry: _path_.mainEntryPointPath,
    output: {
        filename: '[name][hash].build.js',
        path: _path_.distBasePath
    },
    module: {
        rules: [
            {
                test: /\.css$/,
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
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
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
                            outputPath: _path_.distImagesPath
                        },
                    },
                ],
            }
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
