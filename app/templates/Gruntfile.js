'use strict';

module.exports = function(grunt){

  /**
   * Load required Grunt tasks. These are installed based on the versions listed
   * in `package.json` when you do `npm install` in this directory.
   */
  require('load-grunt-tasks')(grunt);

  /**
   * Time how long tasks take. Can help when optimizing build times
   */
  require('time-grunt')(grunt);

  /**
   * Configurable paths for the application
   */
  var projectConfig = require('./project.config')();

  /**
   * Config Tasks
   */
  var ExpressConfig = require('./grunt/express');
  var LessConfig = require('./grunt/less');
  var JshintConfig = require('./grunt/jshint');
  var WiredepConfig = require('./grunt/wiredep');
  var InjectorConfig = require('./grunt/injector');
  var WatchConfig = require('./grunt/watch');

  var CleanConfig = require('./grunt/clean');
  var CopyConfig = require('./grunt/copy');
  var ConcatConfig = require('./grunt/concat');
  var NgAnnotateConfig = require('./grunt/ngannotate');
  var UglifyConfig = require('./grunt/uglify');
  var CssMinConfig = require('./grunt/cssmin');
  var HtmlMinConfig = require('./grunt/htmlmin');

  var KarmaConfig = require('./grunt/karma');

  /**
   * Task Configs
   */
  grunt.config.init(
    grunt.util._.extend(
      {
        projectConfig : projectConfig
      },
      ExpressConfig,
      LessConfig,
      JshintConfig,
      WiredepConfig,
      InjectorConfig,
      WatchConfig,
      CleanConfig,
      CopyConfig,
      ConcatConfig,
      NgAnnotateConfig,
      UglifyConfig,
      CssMinConfig,
      HtmlMinConfig,
      KarmaConfig

    )
  );

  /**
   * Task Registration
   */
  grunt.registerTask('index', ['wiredep:app', 'injector:app']);
  grunt.registerTask('style', ['less:app']);


  grunt.registerTask('default', ['build', 'watch']);

  grunt.registerTask('build', [
    'style',
    'jshint:app',
    'index'
  ]);

  grunt.registerTask('serve', [
    'build',
    'express:localDevServer',
    'express-keepalive'
  ]);

  grunt.registerTask('dist', [
    'build',

    'clean:temp',
    'clean:dist',
    'copy:dist',
    'concat:dist_css',
    'cssmin:dist',

    'concat:dist_js',
    'ngAnnotate:dist',
    'uglify:dist_app',
    'uglify:dist_bower',
    'clean:temp',

    'injector:dist',
    'wiredep:dist',
    'htmlmin:dist_index',
    'htmlmin:dist_tpl'

  ]);

  grunt.registerTask('serve:dist', [
    'deploy',
    'express:localDistServer',
    'express-keepalive'
  ]);

  grunt.registerTask('test:unit', [
    'karma:unit'
  ]);

  grunt.registerTask('test:midway', [
    'karma:midway'
  ]);


};
