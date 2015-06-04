'use strict';

var gulp = require('gulp');

/**
 * MINIFY TASKS
 */
gulp.task('dist-bower', ['dist-minify-bower-js', 'dist-minify-bower-css', 'dist-copy-bower-fonts']);
