'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var path = require('path');

/**
 * SERVER POINTS TO DIST FOLDER
 */
gulp.task('dist-server', function () {

  browserSync({
    server: {
      baseDir: projectConfig.path.distDir,
      index:   projectConfig.path.main,
      port:    4000,
      browser: 'Google Chrome',
      open:    true
    }
  });

});
