const path = require('path');


const srcBasePath = path.resolve(__dirname, '..', 'src');
const publicBasePath = path.resolve(__dirname, '..', 'public');
const mainEntryPointPath = path.join(srcBasePath, 'index.js');
const mainAppFilePath = path.join(srcBasePath, 'App.js');
const appCataloguePath = path.join(srcBasePath, 'app');

const distBasePath = path.resolve(__dirname, '..', 'dist');


module.exports = {
    srcBasePath,
    publicBasePath,
    mainEntryPointPath,
    mainAppFilePath,
    appCataloguePath,
    distBasePath
};
