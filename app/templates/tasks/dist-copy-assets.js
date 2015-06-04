'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var path = require('path');

/**
 * COPY
 */
gulp.task('dist-copy-assets', ['dist-clean'], function () {

  var assestsFiles = [
    path.join(projectConfig.path.srcDir, projectConfig.path.asset.fontDir + '/**/*'),
    path.join(projectConfig.path.srcDir, projectConfig.path.asset.mediaDir + '/**/*'),
    path.join(projectConfig.path.srcDir, projectConfig.path.asset.i18n)
  ];

  return gulp
    .src(assestsFiles, {base: projectConfig.path.srcDir})
    .pipe(gulp.dest(projectConfig.path.distDir));
});
