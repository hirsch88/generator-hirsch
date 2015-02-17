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
  var GruntPathConfig = grunt.file.readJSON('./grunt/config/paths.json');
  var GruntProjectConfig = require('./grunt/config/project.js')(grunt);

  /**
   * Config Tasks
   */
  var ExpressConfig = require('./grunt/task/express.js');
  var LessConfig = require('./grunt/task/less.js');
  var JshintConfig = require('./grunt/task/jshint.js');
  var WiredepConfig = require('./grunt/task/wiredep.js');
  var InjectorConfig = require('./grunt/task/injector.js');
  var WatchConfig = require('./grunt/task/watch.js');

  var CleanConfig = require('./grunt/task/clean.js');
  var CopyConfig = require('./grunt/task/copy.js');
  var ConcatConfig = require('./grunt/task/concat.js');
  var NgAnnotateConfig = require('./grunt/task/ngannotate.js');
  var UglifyConfig = require('./grunt/task/uglify.js');
  var CssMinConfig = require('./grunt/task/cssmin.js');
  var HtmlMinConfig = require('./grunt/task/htmlmin.js');


  /**
   * Task Configs
   */
  grunt.config.init(
    grunt.util._.extend(
      GruntPathConfig,
      GruntProjectConfig,
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