const path = require('path');


module.exports = {
    // Basics setting for dev server
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
};
