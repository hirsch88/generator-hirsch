'use strict';

var gulp = require('gulp');
var projectConfig = require(process.cwd() + '/project.config.js')();
var $ = require('gulp-load-plugins')({ lazy: true });
var typescript = require('typescript');

var tsProject = $.typescript.createProject(process.cwd() + '/tsconfig.json', {
  typescript: typescript
});

/**
 * TS
 * Lints and compiles all .ts source files in the app.
 */
gulp.task('ts', ['tslint'], function() {
  return gulp.src([
      projectConfig.path.srcDir + '/' + projectConfig.path.app.scripts.replace(/\.js$/, '.ts'),
      projectConfig.path.testDir + '/' + projectConfig.path.test.specs.replace(/\.js$/, '.ts'),
      projectConfig.path.testDir + '/' + projectConfig.path.libDir + '/**/*.ts',
      '<%= prompts.typingsPath %>/**/*.d.ts'
    ], {
      base: '.'
    })
    .pipe($.sourcemaps.init())
    .pipe($.typescript(tsProject))
    .js
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.'));
});
