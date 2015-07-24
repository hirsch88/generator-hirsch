'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var header = require('gulp-header');
var minifyCSS = require('gulp-minify-css');
var path = require('path');

/**
 * MINIFY APP CSS-FILES
 */
gulp.task('dist-minify-app-css', [<% if(prompts.useLess) { %>'less'<% } %><% if(prompts.useSass) { %>'sass'<% } %>], function () {

  var cssFiles = path.join(projectConfig.path.srcDir, projectConfig.path.assets.css);

  var newCssFileName = path.join(
    projectConfig.path.assets.cssDir,
    projectConfig.buildDistFileName(projectConfig.pkg.name, 'css')
  );

  return gulp
    .src(cssFiles, {base: './'})
    .pipe(minifyCSS({keepBreaks: true}))
    .pipe($.rename(newCssFileName))
    .pipe(header(projectConfig.banner, {pkg: projectConfig.pkg}))
    .pipe(gulp.dest(projectConfig.path.distDir));
});
