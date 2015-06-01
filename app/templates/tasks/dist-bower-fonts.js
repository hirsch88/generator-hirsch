'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({ lazy: true });
var header = require('gulp-header');
var path = require('path');

/**
 * COPY BOWER FONT FILES
 */
gulp.task('dist-bower-fonts', function () {
  return gulp
    .src(projectConfig.bower.files.fonts)
    .pipe(header(projectConfig.banner, { pkg: projectConfig.pkg }))
    .pipe(gulp.dest(path.join(projectConfig.path.distDir, projectConfig.path.libDir, projectConfig.path.asset.fontDir)));
});
