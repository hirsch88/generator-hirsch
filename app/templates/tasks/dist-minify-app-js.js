'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var header = require('gulp-header');
var path = require('path');

/**
 * MINIFY APP JS-FILES
 */
gulp.task('dist-minify-app-js'<% if(!prompts.useTypescript) { %>, ['jshint'] <% } %>, function () {
  var source = projectConfig.angular.files;
  var destination = path.join(projectConfig.path.distDir, projectConfig.path.appDir);
  var fileName = projectConfig.buildDistFileName(projectConfig.pkg.name, 'js');

  return gulp
    .src(source)
    .pipe($.concat(fileName))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(header(projectConfig.banner, {pkg: projectConfig.pkg}))
    .pipe(gulp.dest(destination));
});
