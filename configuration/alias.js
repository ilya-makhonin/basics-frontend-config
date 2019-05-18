const _path_ = require('./__path');


const aliasList = {
    'components': _path_.srcGetPath('app', 'components'),
    'containers': _path_.srcGetPath('app', 'containers'),
    'assets': _path_.srcGetPath('app','assets'),
    'styles': _path_.srcStylesPath,
    'images': _path_.srcImagesPath,
    'store': _path_.srcGetPath('app','store'),
    'reducer': _path_.srcGetPath('app','reducer'),
    'actions': _path_.srcGetPath('app','actions'),
    'constants': _path_.srcGetPath('app', 'constants'),
    'utils': _path_.srcGetPath('app', 'utils'),
    'react-dom': '@hot-loader/react-dom'
};


module.exports = aliasList;
