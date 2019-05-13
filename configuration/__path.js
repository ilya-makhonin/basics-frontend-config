const path = require('path');


const root = path.resolve(__dirname, '..');

// The basics paths to main folders of a project
const srcBasePath = path.resolve(root, 'src');
const publicBasePath = path.resolve(root, 'public');
const distBasePath = path.resolve(root, 'dist');

// The paths to public files: index.html, favicon.ico, manifest.json
const publicHTMLPath = path.resolve(publicBasePath, 'index.html');
const publicFaviconPath = path.resolve(publicBasePath, 'favicon.ico');
const publicManifestPath = path.resolve(publicBasePath, 'manifest.json');

// The paths to main files of a React.js application
const mainEntryPointPath = path.resolve(srcBasePath, 'index.js');
const mainAppFilePath = path.resolve(srcBasePath, 'App.js');

// And other: video, audio, etc
const srcImagesPath = path.resolve(srcBasePath, 'app', 'assets', 'images');
const srcStylesPath = path.resolve(srcBasePath, 'app', 'assets', 'styles');

const srcCSSPath = path.resolve(srcStylesPath, 'css');
const srcSCSSPath = path.resolve(srcStylesPath, 'scss');
const srcLESSPath = path.resolve(srcStylesPath, 'less');


// ***************** Functions for getting path to some directory *****************

const srcGetPath = (...pathFor) => path.resolve(srcBasePath, ...pathFor);
const distGetPath = (...pathFor) => path.resolve(distBasePath, ...pathFor);
const publicGetPath = (...pathFor) => path.resolve(publicBasePath, ...pathFor);

// ********************************************************************************


module.exports = {
    root,
    srcBasePath,
    publicBasePath,
    publicHTMLPath,
    publicFaviconPath,
    publicManifestPath,
    mainEntryPointPath,
    mainAppFilePath,
    srcImagesPath,
    srcStylesPath,
    srcCSSPath,
    srcSCSSPath,
    srcLESSPath,
    distBasePath,
    srcGetPath,
    distGetPath
};
