'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

/**
 * TASKLISTING
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing);
gulp.task('list', $.taskListing);
