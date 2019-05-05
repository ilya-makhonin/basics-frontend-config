const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const configForWorkingWithOutputStyles = function (mode, type) {
    const forDevelopmentStyleLoader = {
        loader: 'style-loader',
        options: {
            hmr: true,
            sourceMap: true,
            singleton: false
        }
    };

    const forProductionStyleLoader = {
        hmr: false
    };

    const pluginConfigDevelopment = {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: true,
        },
    }
};