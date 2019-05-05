const path = require('path');


// The basics paths to main folders of a project
const srcBasePath = path.resolve(__dirname, '..', 'src');
const publicBasePath = path.resolve(__dirname, '..', 'public');
const distBasePath = path.resolve(__dirname, '..', 'dist');

// The paths to public files: index.html, favicon.ico, manifest.json
const publicHTMLPath = path.resolve(publicBasePath, 'index.html');
const publicFaviconPath = path.resolve(publicBasePath, 'favicon.ico');
const publicManifestPath = path.resolve(publicBasePath, 'manifest.json');

// The paths to main files of a React.js application
const mainEntryPointPath = path.resolve(srcBasePath, 'index.js');
const mainAppFilePath = path.resolve(srcBasePath, 'App.js');

// The paths to main folders of a React.js application
const appCataloguePath = path.resolve(srcBasePath, 'app');

// And other: video, audio, etc
const appAssetsPath = path.resolve(appCataloguePath, 'assets');
const srcComponentsPath = path.resolve(appCataloguePath, 'components');
const srcContainersPath = path.resolve(appCataloguePath, 'containers');

const srcImagesPath = path.resolve(appAssetsPath, 'images');
const srcStylesPath = path.resolve(appAssetsPath, 'styles');

const srcCSSPath = path.resolve(srcStylesPath, 'css');
const srcSCSSPath = path.resolve(srcStylesPath, 'scss');
const srcLESSPath = path.resolve(srcStylesPath, 'less');

// The paths for Redux components
const storePath = path.resolve(appCataloguePath, 'store');
const reducersPath = path.resolve(appCataloguePath, 'reducers');
const actionsPath = path.resolve(appCataloguePath, 'actions');


// ***************** Functions for getting path to some directory *****************

const srcGetPath = (...pathFor) => path.resolve(srcBasePath, ...pathFor);
const distGetPath = (...pathFor) => path.resolve(distBasePath, ...pathFor);
const publicGetPath = (...pathFor) => path.resolve(publicBasePath, ...pathFor);

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
    appAssetsPath,
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
    distBasePath
};
