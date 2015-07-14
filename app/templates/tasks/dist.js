'use strict';

var gulp = require('gulp');

/**
 * DIST
 */
gulp.task('dist', ['build-config', 'dist-index-inject', 'dist-copy-assets'], function (cb) {

  console.log('dist done !!!');
  cb();
});
