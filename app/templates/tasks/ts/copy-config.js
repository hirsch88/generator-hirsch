'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var path = require('path');
var util = require('gulp-util');
var rename = require('gulp-rename');

/**
 * COPY
 */
gulp.task('copy-config', function () {
  var env = util.env.environment || util.env.env || 'dev';
  var configBase = path.join(projectConfig.path.srcDir, projectConfig.path.asset.configDir);

  return gulp
    .src(path.join(configBase, 'config.' + env + '.json'))
    .pipe(rename('config.json'))
    .pipe(gulp.dest(path.join(projectConfig.path.srcDir, projectConfig.path.asset.configDir)));
});
