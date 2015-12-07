'use strict';

var gulp = require('gulp');

/**
 * BUILD
 */

gulp.task('build', [<% if(!prompts.useTypescript) { %>'jshint', <% } %>'bootlint', 'htmllint', 'inject', 'build-config']);
