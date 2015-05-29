'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});

/**
 * TEST E2E
 */
gulp.task('test-e2e', function () {

  var testFiles = projectConfig.karma.files;
  testFiles.push(projectConfig.path.test.e2e.specs);

  return gulp
    .src(testFiles)
    .pipe($.karma({
      configFile: './../' + projectConfig.path.test.e2e.config,
      action:     'run'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});
