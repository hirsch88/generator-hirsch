'use strict';

var gulp = require('gulp');

/**
 * BUILD
 */
gulp.task('build', [<% if(!prompts.useTypescript) { %>'jshint', <% } %>'inject'<% if(prompts.useTypescript) { %>, 'copy-config'<% } %>]);
