'use strict';

var gulp = require('gulp');
var install = require('gulp-install');

/**
 * INSTALL
 * Automatically install npm and bower packages if package.json or
 * bower.json is found in the gulp file stream respectively
 */
gulp.task('install', function () {
  return gulp
    .src(['./bower.json', './package.json'])
    .pipe(install());
});
