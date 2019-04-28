const path = require('path');


// The basics paths to main folders of a project
const srcBasePath = path.resolve(__dirname, '..', 'src');
const publicBasePath = path.resolve(__dirname, '..', 'public');
const distBasePath = path.resolve(__dirname, '..', 'dist');

// The paths to main files of a React.js application
const mainEntryPointPath = path.join(srcBasePath, 'index.js');
const mainAppFilePath = path.join(srcBasePath, 'App.js');

// The paths to main folders of a React.js application
const appCataloguePath = path.join(srcBasePath, 'app');
const srcImagesPath = path.join(appCataloguePath, 'assets', 'images');
/**
 * app
 *   components
 *   containers
 *   styles
 *   and etc
 *   ...
 */

// The paths to dist main folders
const distImagesPath = path.resolve(distBasePath, 'images');


// ***************** Functions for getting path to some directory *****************

const srcGetPath = (...pathFor) => path.join(srcBasePath, ...pathFor);
const distGetPath = (...pathFor) => path.join(distBasePath, ...pathFor);
const publicGetPath = (...pathFor) => path.join(publicBasePath, ...pathFor);

// ********************************************************************************


module.exports = {
    srcBasePath,
    publicBasePath,
    mainEntryPointPath,
    mainAppFilePath,
    appCataloguePath,
    srcImagesPath,
    distBasePath,
    distImagesPath
};
