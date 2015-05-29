'use strict';

var gulp = require('gulp');

/**
 * MINIFY TASKS
 */
gulp.task('dist-app', ['dist-minify-app-css', 'dist-minify-app-js', 'dist-minify-app-html']);