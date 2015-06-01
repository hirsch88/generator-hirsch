'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({ lazy: true });

/**
 * TS WATCH
 * Watches source .ts files for changes and recompiles them.
 */
gulp.task('ts-watch', function () {
  gulp.watch(projectConfig.path.srcDir + '/' + projectConfig.path.app.scripts.replace(/\.js$/, '.ts'), ['ts']);
  gulp.watch(projectConfig.path.testDir + '/' + projectConfig.path.test.specs.replace(/\.js$/, '.ts'), ['ts']);
});
