const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
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
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
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
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/assets/index.html'),
            filename: 'index.html',
            path: outputPath
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "source-map",
    devServer: devServerConfig
};


module.exports = webPackConfigure;
