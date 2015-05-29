'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var path = require('path');

/**
 * DIST INDEX INJECT
 */
gulp.task('dist-index-inject', ['dist-index-copy'], function () {

  var source = [];
  source.push(path.join(projectConfig.path.distDir, projectConfig.path.asset.css));
  source.push(path.join(projectConfig.path.distDir, projectConfig.path.appDir, '**/*.js'));

  var bowerFiles = [];
  bowerFiles.push(path.join(projectConfig.path.distDir, projectConfig.path.libDir, '**/*.js'));
  bowerFiles.push(path.join(projectConfig.path.distDir, projectConfig.path.libDir, '**/*.css'));

  return gulp
    .src(path.join(projectConfig.path.distDir, projectConfig.path.main))
    .pipe($.inject(gulp.src(bowerFiles, {read: false}), {name: 'bower', relative: true}))
    .pipe($.inject(gulp.src(source), {relative: true}))
    .pipe(gulp.dest(projectConfig.path.distDir));

});
