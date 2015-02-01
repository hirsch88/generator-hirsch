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
  var GruntConfig = grunt.file.readJSON('./build/config/paths.json');
  var ProjectConfig = require('./build/config/project.js')(grunt);

  /**
   * Config Tasks
   */
  var ExpressConfig = require('./build/task/express.js');
  var LessConfig = require('./build/task/less.js');
  var JshintConfig = require('./build/task/jshint.js');
  var WiredepConfig = require('./build/task/wiredep.js');
  var InjectorConfig = require('./build/task/injector.js');
  var WatchConfig = require('./build/task/watch.js');

  var CleanConfig = require('./build/task/clean.js');
  var CopyConfig = require('./build/task/copy.js');
  var ConcatConfig = require('./build/task/concat.js');
  var NgAnnotateConfig = require('./build/task/ngannotate.js');
  var UglifyConfig = require('./build/task/uglify.js');
  var CssMinConfig = require('./build/task/cssmin.js');
  var HtmlMinConfig = require('./build/task/htmlmin.js');


  /**
   * Task Configs
   */
  grunt.config.init(
    grunt.util._.extend(
      GruntConfig,
      ProjectConfig,
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
      HtmlMinConfig

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

  grunt.registerTask('deploy', [
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

};