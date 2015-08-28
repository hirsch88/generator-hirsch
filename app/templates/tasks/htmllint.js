'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var htmllint = require('gulp-htmllint');

/**
 * HTML5-Lint
 * Lints all .html files in the app.
 */
gulp.task('htmllint', function () {

  return gulp.src(projectConfig.path.srcDir + '/' + projectConfig.path.appDir + '/**/*.html')
    .pipe(htmllint({config: '.htmllintrc'}));
});
