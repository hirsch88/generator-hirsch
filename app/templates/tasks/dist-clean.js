'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var del = require('del');
/**
 * CLEAN
 */
gulp.task('dist-clean', function (cb) {
  del([
    projectConfig.path.distDir
  ], cb);
});
