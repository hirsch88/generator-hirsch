'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var bootlint = require('gulp-bootlint');

/**
 * Boot-Lint
 * Lints all .html files with bootstrap linting rules.
 */
gulp.task('bootlint', function() {
  // E001 is DOCTYPE at start of file; E015 is multiple input-addons on one side of input disallowed
  // full list here: https://github.com/twbs/bootlint/wiki
  return gulp.src(projectConfig.path.srcDir + '/' + projectConfig.path.appDir + '/**/*.html')
             .pipe(bootlint({ disabledIds: ['E001', 'E015'] }));
});
