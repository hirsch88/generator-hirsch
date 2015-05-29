'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});

/**
 * TEST MIDWAY
 * Description
 */
gulp.task('test-midway', function () {

  var testFiles = projectConfig.karma.files;
  testFiles.push('./test/midway/**/*.spec.js');

  return gulp
    .src(testFiles)
    .pipe($.karma({
      basePath:    process.cwd(),
      configFile: './karma-midway.config.js',
      action:     'run'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });

});
