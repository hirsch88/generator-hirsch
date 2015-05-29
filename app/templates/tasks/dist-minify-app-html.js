'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var path = require('path');

/**
 * MINIFY APP TEMPLATE-FILES
 */
gulp.task('dist-minify-app-html', function () {

  var source = path.join(projectConfig.path.srcDir, projectConfig.path.app.templates);
  var destination = path.join(projectConfig.path.distDir, projectConfig.path.appDir);

  return gulp.src(source)
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(destination))

});
