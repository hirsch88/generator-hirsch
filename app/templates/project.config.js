module.exports = function (isGenerator) {
  'use strict';

  isGenerator = isGenerator || false;

  var path = require('path');

  var bowerFiles = (!isGenerator) ? require('main-bower-files') : [];
  var wiredep = require('wiredep');
  var bowerFilesJs = [];
  var bowerFilesCss = [];
  try {
    bowerFilesJs = (!isGenerator) ? wiredep({})['js'] : [];
    bowerFilesCss = (!isGenerator) ? wiredep({})['css'] : [];
  } catch (e) {

  }

  var projectConfig = {

    /**
     * BANNER
     * The banner is the comment that is placed at the top of our compiled source files. It is first processed
     * as a Grunt template, where the `<%=` pairs are evaluated based on this very configuration object.
     */
    banner: '/**\n' +
            ' * @name           <%= pkg.name %>\n' +
            ' * @description    <%= pkg.description %>\n\n' +
            ' * @version        <%= pkg.version %>\n' +
            ' * @author         <%= pkg.author %>\n' +
            ' * @license        <%= pkg.license %>\n' +
    ' */\n',

    /**
     * MODULES
     */
    ignoredModules: [
      'core'
    ],

    /**
     * PATH
     * This object contains all paths
     */
    path: {
      srcDir:    'src',
      distDir:   'dist',
      docsDir:   'docs',
      testDir:   'test',
      buildDir:  'build',
      libDir:    'lib',
      appDir:    'app',
      assetsDir: 'assets',
      tempDir:   '.tmp',
      main:      'index.html',
      asset:     {
        cssDir:   'assets/css',
        css:      'assets/css/**/*.css',
        lessDir:  'assets/less',
        less:     'assets/less/**/*.less',
        lessMain: 'assets/less/main.less',
        fontDir:  'assets/fonts',
        mediaDir: 'assets/medias',
        i18nDir:  'assets/i18n',
        i18n:     'assets/i18n/**/*.json'
      },
      app:       {
        main:       'app/app.js',
        modules:    'app/**/*.module.js',
        services:   'app/**/*.service.js',
        directives: 'app/**/*.directive.js',
        scripts:    'app/**/*.js',
        templates:  'app/**/*.html',
        coreDir:    'app/core',
        commonDir:  'app/common',
        viewDir:    'app/views',
        layoutDir:  'app/layout',
        common:     {
          serviceDir:   'app/common/services',
          filterDir:    'app/common/filters',
          templateDir:  'app/common/templates',
          directiveDir: 'app/common/directives',
          constantDir:  'app/common/constants',
          valueDir:     'app/common/values',
          configDir:    'app/common/configs'
        }
      },
      test:      {
        specs: '**/*.spec.js'
      }
    }
  };

  /**
   * NODE DEPENDENCIES
   */
  projectConfig.pkg = (!isGenerator) ? require('./package') : {};

  /**
   * BOWER OPTIONS
   */
  projectConfig.bower = {
    config: (!isGenerator) ? require('./bower') : {}
  };

  /**
   * ANGULARJS FILES
   */
  projectConfig.angular = getAngularScripts();

  /**
   * KARMA FILES
   */
  projectConfig.karma = getKarmaOptions();

  /**
   * BOWRE FILES
   */
  projectConfig.bower = getBowerFiles();

  /**
   * DIST MINIFIED NAMEs
   */
  projectConfig.buildDistFileName = buildDistFileName;


////////////////

  return projectConfig;

////////////////

  function buildDistFileName(name, extension) {
    name = name || projectConfig.pkg.name;
    extension = extension || 'js';
    return name + '-' + projectConfig.pkg.version + '.min.' + extension;
  }

  function getAngularScripts() {
    return {
      files: [
        path.join(projectConfig.path.srcDir, projectConfig.path.app.main),
        path.join(projectConfig.path.srcDir, projectConfig.path.app.coreDir, '*.js'),
        path.join(projectConfig.path.srcDir, projectConfig.path.app.commonDir, '*.js'),
        path.join(projectConfig.path.srcDir, projectConfig.path.app.commonDir, '**/*.js'),
        path.join(projectConfig.path.srcDir, projectConfig.path.app.modules),
        path.join(projectConfig.path.srcDir, projectConfig.path.app.scripts)
      ]
    };
  }

  function getKarmaOptions() {
    return {
      files:  [].concat(
        bowerFilesJs,
        getAngularScripts().files
      ),
      unit:   [
        'src/lib/angular-mocks/angular-mocks.js',
        'test/unit/**/*.spec.js'
      ],
      midway: [
        'test/midway/**/*.spec.js'
      ]
    };
  }

  function getBowerFiles() {
    return {
      files: {
        js:   [].concat(
          bowerFilesJs
        ),
        css:  [].concat(
          bowerFilesCss
        ),
        main: bowerFiles
      }
    };
  }


}
;
