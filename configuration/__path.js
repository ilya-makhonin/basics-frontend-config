const path = require('path');


// The basics paths to main folders of a project
const srcBasePath = path.resolve(__dirname, '..', 'src');
const publicBasePath = path.resolve(__dirname, '..', 'public');
const distBasePath = path.resolve(__dirname, '..', 'dist');

const publicHTMLPath = path.join(publicBasePath, 'index.html');
const publicFaviconPath = path.join(publicBasePath, 'favicon.ico');
const publicManifestPath = path.join(publicBasePath, 'manifest.json');

// The paths to main files of a React.js application
const mainEntryPointPath = path.join(srcBasePath, 'index.js');
const mainAppFilePath = path.join(srcBasePath, 'App.js');

// The paths to main folders of a React.js application
const appCataloguePath = path.join(srcBasePath, 'app');

// And other: video, audio, etc
const srcImagesPath = path.join(appCataloguePath, 'assets', 'images');
const srcStylesPath = path.join(appCataloguePath, 'assets', 'styles');
const srcCSSPath = path.join(srcStylesPath, 'css');
const srcSCSSPath = path.join(srcStylesPath, 'scss');
const srcLESSPath = path.join(srcStylesPath, 'less');
const srcComponentsPath = path.join(appCataloguePath, 'components');
const srcContainersPath = path.join(appCataloguePath, 'containers');

// The paths for Redux components
const storePath = path.join(appCataloguePath, 'store');
const reducersPath = path.join(appCataloguePath, 'reducers');
const actionsPath = path.join(appCataloguePath, 'actions');

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
    publicHTMLPath,
    publicFaviconPath,
    publicManifestPath,
    mainEntryPointPath,
    mainAppFilePath,
    appCataloguePath,
    srcImagesPath,
    srcStylesPath,
    srcCSSPath,
    srcSCSSPath,
    srcLESSPath,
    srcComponentsPath,
    srcContainersPath,
    storePath,
    reducersPath,
    actionsPath,
    distBasePath,
    distImagesPath
};
