'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var path = require('path');
var browserSync = require('browser-sync');
var reload = browserSync.reload;<% if(prompts.styleSourcemaps) {%>
var sourcemaps = require('gulp-sourcemaps');<% } %>

/**
 * SASS
 * Generates a new css file from our sass files
 */
gulp.task('sass', function () {

  var mainSassFile = path.join(projectConfig.path.srcDir, projectConfig.path.assets.sassMain);
  var mainCssDir = path.join(projectConfig.path.srcDir, projectConfig.path.assets.cssDir);
  var cssFile = projectConfig.pkg.name + '.css';

  return gulp
    .src(mainSassFile)<% if(prompts.styleSourcemaps) {%>
    .pipe(sourcemaps.init()) <% } %>
    .pipe(sass().on('error', sass.logError))<% if(prompts.styleSourcemaps) {%>
    .pipe(sourcemaps.write()) <% } %>
    .pipe($.rename(cssFile))
    .pipe(gulp.dest(mainCssDir))
    .pipe(reload({stream: true}));

});
