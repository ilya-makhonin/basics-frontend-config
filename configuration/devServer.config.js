const path = require('path');


module.exports = {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: 9000,
    historyApiFallback: true,
    inline: true,
    hot: true
};
