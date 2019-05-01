const path = require('path');
const _path_ = require('./configuration/__path');


const aliasList = {
    'components': _path_.srcComponentsPath,
    'containers': _path_.srcContainersPath,
    'assets': _path_.appAssetsPath,
    'styles': '../src/app/assets/styles',
    'images': _path_.srcImagesPath,
    'store': _path_.storePath,
    'reducers': _path_.reducersPath,
    'actions': _path_.actionsPath
};


module.exports = aliasList;
