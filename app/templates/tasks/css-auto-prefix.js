'use strict';

var gulp = require('gulp');
var path = require('path');
var projectConfig = require(process.cwd() + '/project.config.js')();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css-auto-prefix',[<% if(prompts.useLess) { %>'less'<% } %><% if(prompts.useSass) { %>'sass'<% } %><% if(prompts.useTypescript) { %>, 'ts' <% } %>], function () {
  var mainCssDir = path.join(projectConfig.path.srcDir, projectConfig.path.assets.cssDir);
  var cssFile = projectConfig.pkg.name + '.css';

    return gulp.src(path.join(mainCssDir, cssFile))
        .pipe(autoprefixer({
            browsers: projectConfig.autoprefixer.browsers,
            cascade: false
        }))
        .pipe(gulp.dest(mainCssDir));
});
