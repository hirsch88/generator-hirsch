'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var stylish = require('jshint-stylish');

/**
 * JSHINT
 * Checks the source code with some defined guidelines from the .jshintrc
 */
gulp.task('jshint', function () {
  return gulp
    .src(projectConfig.path.srcDir + '/' + projectConfig.path.app.scripts)
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish))
    .pipe($.jshint.reporter('fail'));
});
