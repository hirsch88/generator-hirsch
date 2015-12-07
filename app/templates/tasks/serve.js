'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({lazy: true});
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var path = require('path');

/**
 * SERVE
 * Creates a webserver and adds some watchers to automatically refresh your browser
 */
gulp.task('serve', ['build'], function () {

  browserSync({
    server: {
      baseDir: projectConfig.path.srcDir,
      index:   projectConfig.path.main,
      browser: 'Google Chrome',
      open:    true
    }
  });

  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.app.templates), ['inject', 'bootlint', 'htmllint', browserSync.reload]);<% if(prompts.useLess) { %>
  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.assets.less), ['less', browserSync.reload]);<% } %><% if(prompts.useSass) { %>
  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.assets.sass), ['sass', browserSync.reload]);<% } %>
  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.app.scripts<% if(prompts.useTypescript) { %>.replace(/\.js$/, '.ts')<% } %>), ['inject', <% if(!prompts.useTypescript) { %>'jshint',<% } %> browserSync.reload]);
  gulp.watch('./bower.json', ['inject', browserSync.reload]);

});

gulp.task('serve-dist', function () {

  browserSync({
    server: {
      baseDir: projectConfig.path.distDir,
      index:   projectConfig.path.main,
      browser: 'Google Chrome',
      open:    true
    }
  });

});
