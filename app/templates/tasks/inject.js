'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var path = require('path');
var _ = require('lodash');

/**
 * INJECT
 * Injects all bower and application scripts into the main index.html file
 */
gulp.task('inject', ['less'], function () {

  var source = [];
  source.push(path.join(projectConfig.path.srcDir, projectConfig.path.asset.css));

  _.forEach(projectConfig.angular.files, function (item) {
    source.push(item);
  });

  return gulp
    .src(path.join(projectConfig.path.srcDir, projectConfig.path.main))
    .pipe($.inject(gulp.src(projectConfig.bower.files.main(), {read: false}), {name: 'bower', relative: true}))
    .pipe($.inject(gulp.src(source), {relative: true}))
    .pipe(gulp.dest(projectConfig.path.srcDir));

});
