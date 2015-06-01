'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({ lazy: true });

/**
 * TSLINT
 * Lints all .ts source files in the app.
 */
gulp.task('tslint', function() {
  return gulp.src([
      projectConfig.path.srcDir + '/' + projectConfig.path.app.scripts.replace(/\.js$/, '.ts'),
      projectConfig.path.testDir + '/' + projectConfig.path.test.specs.replace(/\.js$/, '.ts'),
      projectConfig.path.testDir + '/' + projectConfig.path.libDir + '/**/*.ts'
    ])
    .pipe($.tslint())
    .pipe($.tslint.report('verbose'));
});
