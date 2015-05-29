'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var header = require('gulp-header');
var path = require('path');

/**
 * MINIFY BOWER JS-FILES
 */
gulp.task('dist-minify-bower-js', function () {
  var source = projectConfig.bower.files.js;
  var destination = path.join(projectConfig.path.distDir, projectConfig.path.libDir);
  var fileName = projectConfig.buildDistFileName('bower', 'js');

  return gulp
    .src(source)
    .pipe($.concat(fileName))
    .pipe($.uglify())
    .pipe(header(projectConfig.banner, {pkg: projectConfig.pkg}))
    .pipe(gulp.dest(destination));
});
