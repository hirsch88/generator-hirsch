'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var sharedConfig = require(process.cwd() + '/karma-shared.config.js');
var $ = require('gulp-load-plugins')({lazy: true});

/**
 * TEST UNIT
 * Description
 */
gulp.task('test-unit', function () {

  var testFiles = sharedConfig().files;
  testFiles.push('./src/lib/angular-mocks/angular-mocks.js');
  testFiles.push('./test/unit/**/*.js');

  return gulp
    .src(testFiles)
    .pipe($.karma({
      configFile: projectConfig.path.test.unit.config,
      action:     'run'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});
