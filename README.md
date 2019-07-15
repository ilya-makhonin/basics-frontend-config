# Basics frontend config

This is basics config for creating React.js application v1.0.0

#### Commends for starting and building an application
+ test - Starting test of an application (Jest)
+ start - Starting Webpack development server with 'light' config
+ light - 'light building of an application
+ build - Full building, minifying and compiling of an application
+ watch - Starting to build of an application with watch option and 'light' config

#### List of files for modifying by a user:
- config\__path.js - full list of paths of the Project (**IMPORTANT!** In this file indicated main paths of the Project)
- config\alias.js - a list of paths at an application (name => path)
- config\jest.config.js - config file for Jest (test a project)
- .eslintrs - the file for configuration ESLint
- src\app.test.js - file for users test (Jest)

#### List of folders are the Project
It is a basics of a project structure. (_At this time the Project does not 
have loaders (or plugins) for working with audio and video files_)

+ public - folder with index.html, favicon.ico and manifest.json
+ src - folder for an app code
    + app - sub-folder for code of an app (components of an app)
        + actions - actions creators for Redux.js
        + assets - media and styles of an app
            + images - folder for images (png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)
            + styles - folder for style files (css|sass|scss|less|css-in-js)
        + components - components of an React app (dump components)
        + constants - an app constants (basically for redux actions creators)
        + containers - React wrapper containers (smart components)
        + reducer - redux reducers
        + store - redux store
        + utils - some file for helpful functions
+ config - folder for config of WebPack, Dev Server, Jest and other options
    + settingsLoadersAndPlugins - sub-folder for config files of some WebPack' loaders and plugins
