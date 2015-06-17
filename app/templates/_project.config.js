module.exports = function (isGenerator) {
  'use strict';

  isGenerator = isGenerator || false;

  var path = require('path');

  var bowerFiles = (!isGenerator) ? require('main-bower-files') : [];
  var wiredep = require('wiredep');
  var bowerFilesJs = [];
  var bowerFilesCss = [];
  var bowerFilesFonts = [];
  try {
    bowerFilesJs = (!isGenerator) ? wiredep({})['js'] : [];
    bowerFilesCss = (!isGenerator) ? wiredep({})['css'] : [];
    if (!isGenerator) {
      bowerFilesFonts = ['font-awesome', 'bootstrap']
        .map(function (s) {
          return wiredep({}).packages[s].main;
        })
        .reduce(function (a, b) {
          return a.concat(b);
        })
        .filter(function (p) {
          return new RegExp('\\' + path.sep + 'fonts\\' + path.sep).test(p);
        });
    }
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
      taskDir:   'tasks',
      libDir:    'lib',
      appDir:    'app',
      assetsDir: 'assets',
      tempDir:   '.tmp',
      main:      'index.html',
      asset:     {
        configDir: 'assets/config',
        config:    {
          environmentsDir: 'assets/config/environments'
        },
        cssDir:    'assets/css',
        css:       'assets/css/**/*.css',
        lessDir:   'assets/less',
        less:      'assets/less/**/*.less',
        lessMain:  'assets/less/main.less',
        fontDir:   'assets/fonts',
        mediaDir:  'assets/medias',
        i18nDir:   'assets/i18n',
        i18n:      'assets/i18n/**/*.json'
      },
      app:       {
        util:       'app/util.js',
        main:       'app/app.js',
        modules:    'app/**/*.module.js',
        configs:    'app/**/*.config.js',
        constants:  'app/**/*.constant.js',
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
        specs:  '**/*.spec.js',
        e2e:    {
          specs:  'test/e2e/**/*.spec.js',
          config: 'karma-e2e.config.js'
        },
        unit:   {
          specs:  'test/unit/**/*.spec.js',
          config: 'karma-unit.config.js'
        },
        midway: {
          specs:  'test/midway/**/*.spec.js',
          config: 'karma-midway.config.js'
        }

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
        path.join(projectConfig.path.srcDir, projectConfig.path.app.util),
        path.join(projectConfig.path.srcDir, projectConfig.path.app.main),
        path.join(projectConfig.path.srcDir, projectConfig.path.app.modules),
        path.join(projectConfig.path.srcDir, projectConfig.path.app.constants),
        path.join(projectConfig.path.srcDir, projectConfig.path.app.configs),
        path.join(projectConfig.path.srcDir, projectConfig.path.app.coreDir, '**/*.js'),
        path.join(projectConfig.path.srcDir, projectConfig.path.app.commonDir, '**/*.js'),
        path.join(projectConfig.path.srcDir, projectConfig.path.app.scripts)
      ]
    };
  }

  function getKarmaOptions() {
    return {
      files:  [].concat(
        getAngularScripts().files
      ),
      bower:  [].concat(
        bowerFilesJs
      ),
      unit:   [
        'src/lib/angular-mocks/angular-mocks.js',
        'src/lib/angular-ui-router/release/angular-ui-router.js',
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
        js:    [].concat(
          bowerFilesJs
        ),
        css:   [].concat(
          bowerFilesCss
        ),
        fonts: [].concat(
          bowerFilesFonts
        ),
        main:  bowerFiles
      }
    };
  }


};
