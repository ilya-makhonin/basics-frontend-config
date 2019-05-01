const path = require('path');
const _path_ = require('./__path');


const aliasList = {
    'components': _path_.srcComponentsPath,
    'containers': _path_.srcContainersPath,
    'assets': _path_.appAssetsPath,
    'styles': _path_.srcStylesPath,
    'images': _path_.srcImagesPath,
    'store': _path_.storePath,
    'reducers': _path_.reducersPath,
    'actions': _path_.actionsPath
};


module.exports = aliasList;
