'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var minifyCSS = require('gulp-minify-css');
var header = require('gulp-header');
var path = require('path');

/**
 * MINIFY BOWER CSS-FILES
 */
gulp.task('dist-minify-bower-css', function () {

  var cssFiles = projectConfig.bower.files.css;
  var fileName = projectConfig.buildDistFileName('bower', 'css');
  var newCssFileName = path.join(
    projectConfig.path.libDir,
    fileName
  );

  return gulp
    .src(cssFiles, {base: './'})
    .pipe($.concat(newCssFileName))
    .pipe(minifyCSS({keepBreaks: true, relativeTo: '../assets'}))
    .pipe(header(projectConfig.banner, {pkg: projectConfig.pkg}))
    .pipe(gulp.dest(projectConfig.path.distDir));
});
