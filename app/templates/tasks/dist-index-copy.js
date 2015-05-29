'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var path = require('path');

/**
 * DIST COPY INDEX FILE
 */
gulp.task('dist-index-copy', ['dist-bower', 'dist-app'], function () {

  return gulp
    .src(path.join(projectConfig.path.srcDir, projectConfig.path.main))
    .pipe(gulp.dest(projectConfig.path.distDir));

});
