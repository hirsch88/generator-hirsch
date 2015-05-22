'use strict';

/* ----------------------------------------------------------------
 CONFIGURATIONS
 ---------------------------------------------------------------- */
var _ = require('lodash');
var gulp = require('gulp');
var del = require('del');
var path = require('path');
var projectConfig = require('./project.config')();

/**
 * LIBRARIES
 */
var $ = require('gulp-load-plugins')({lazy: true});
var stylish = require('jshint-stylish');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var minifyCSS = require('gulp-minify-css');
var header = require('gulp-header');
var install = require('gulp-install');

<% if(prompts.useTypescript) { %>
  var ts = require('gulp-typescript');
  var tslint = require('gulp-tslint');
  var typescript = require('typescript');
<% } %>

/**
 * TASKLISTING
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing);

/* ----------------------------------------------------------------
 DEVELOPMENT
 ---------------------------------------------------------------- */

/**
 * INSTALL
 * Automatically install npm and bower packages if package.json or
 * bower.json is found in the gulp file stream respectively
 */
gulp.task('install', function () {
  return gulp
    .src(['./bower.json', './package.json'])
    .pipe(install());
});

/**
 * SERVE
 * Creates a webserver and adds some watchers to automatically refreshs your browser
 */
gulp.task('serve', ['index'], function () {

  browserSync({
    server: {
      baseDir: projectConfig.path.srcDir,
      index:   projectConfig.path.main,
      browser: 'Google Chrome',
      open:    true
    }
  });

  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.app.templates), ['index', browserSync.reload]);
  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.asset.less), ['style', browserSync.reload]);
  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.app.scripts), ['index', browserSync.reload]);
  gulp.watch('./bower.json', ['index', browserSync.reload]);

});

gulp.task('serve-dist', ['dist'], function () {

  browserSync({
    server: {
      baseDir: projectConfig.path.distDir,
      index:   projectConfig.path.main,
      browser: 'Google Chrome',
      open:    true
    }
  });

  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.app.templates), ['dist', browserSync.reload]);
  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.asset.less), ['dist', browserSync.reload]);
  gulp.watch(path.join(projectConfig.path.srcDir, projectConfig.path.app.scripts), ['dist', browserSync.reload]);
  gulp.watch('./bower.json', ['dist', browserSync.reload]);

});

/**
 * BUILD
 */
gulp.task('build', [<% if(prompts.useTypescript) { %>'ts', <% }  else { %>'jshint', <% } %>'index']);
<% if(prompts.useTypescript) { %>
var tsProject = ts.createProject('tsconfig.json', {
  typescript: typescript
});

/**
 * TS
 * Lints and compiles all .ts source files in the app.
 */
gulp.task('ts', function () {
  return gulp.src([
      projectConfig.path.srcDir + '/' + projectConfig.path.app.scripts,
      projectConfig.path.testDir + '/' + projectConfig.path.app.scripts,
      '<%= prompts.typingsPath %>/**/*.d.ts'
    ])
    .pipe(tslint())
    .pipe(ts(tsProject))
    .js
    .pipe(gulp.dest('.'));
});
<% } else { %>
/**
 * JSHINT
 * Checks the source code with some defined guidelines from the .jshintrc
 */
gulp.task('jshint', function () {
  return gulp
    .src(projectConfig.path.srcDir + '/' + projectConfig.path.app.scripts)
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish))
    .pipe($.jshint.reporter('fail'));
});
<% } %>
/**
 * INJECT
 * Injects all bower and application scripts into the main index.html file
 */
gulp.task('index', ['style'], function () {

  var source = [];
  source.push(path.join(projectConfig.path.srcDir, projectConfig.path.asset.css));

  _.forEach(projectConfig.angular.files, function (item) {
    source.push(item);
  });

  return gulp
    .src(path.join(projectConfig.path.srcDir, projectConfig.path.main))
    .pipe($.inject(gulp.src(projectConfig.bower.files.main(), {read: false}), {name: 'bower', relative: true}))
    .pipe($.inject(gulp.src(source), {relative: true}))
    .pipe(gulp.dest(projectConfig.path.srcDir));

});

/**
 * LESS
 * Generates a new css file from our less files
 */
gulp.task('style', function () {

  var mainLessFile = path.join(projectConfig.path.srcDir, projectConfig.path.asset.lessMain);
  var mainCssDir = path.join(projectConfig.path.srcDir, projectConfig.path.asset.cssDir);

  var cssFile = projectConfig.pkg.name + '.css';

  return gulp
    .src(mainLessFile)
    .pipe($.less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe($.rename(cssFile))
    .pipe(gulp.dest(mainCssDir))
    .pipe(reload({stream: true}));

});


/* ----------------------------------------------------------------
 TESTING
 ---------------------------------------------------------------- */
gulp.task('test', ['test-midway', 'test-unit']);

gulp.task('test-e2e', function () {

  var testFiles = projectConfig.karma.files;
  testFiles.push('test/e2e/**/*.spec.js');

  return gulp
    .src(testFiles)
    .pipe($.karma({
      configFile: './karma-e2e.config.js',
      action:     'run'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('test-unit', function () {

  var testFiles = projectConfig.karma.files;
  testFiles.push('src/lib/angular-mocks/angular-mocks.js');
  testFiles.push('test/unit/**/*.spec.js');

  return gulp
    .src(testFiles)
    .pipe($.karma({
      configFile: './karma-unit.config.js',
      action:     'run'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('test-midway', function () {

  var testFiles = projectConfig.karma.files;
  testFiles.push('test/midway/**/*.spec.js');

  return gulp
    .src(testFiles)
    .pipe($.karma({
      configFile: './karma-midway.config.js',
      action:     'run'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });

});


/* ----------------------------------------------------------------
 DEPLOYING
 ---------------------------------------------------------------- */
gulp.task('dist', ['dist-index-inject', 'dist-copy-assets'], function (cb) {

  console.log('dist done !!!');
  cb();
});

/**
 * CLEAN
 */
gulp.task('dist-clean', function (cb) {
  del([
    projectConfig.path.distDir
  ], cb);
});

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

/**
 * MINIFY TASKS
 */
gulp.task('dist-app', ['dist-minify-app-css', 'dist-minify-app-js', 'dist-minify-app-html']);

gulp.task('dist-bower', ['dist-minify-bower-js', 'dist-minify-bower-css']);

/**
 * MINIFY APP
 */
gulp.task('dist-minify-app-js', ['jshint'], function () {
  var source = projectConfig.angular.files;
  var destination = path.join(projectConfig.path.distDir, projectConfig.path.appDir);
  var fileName = projectConfig.buildDistFileName(projectConfig.pkg.name, 'js');

  return gulp
    .src(source)
    .pipe($.concat(fileName))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(header(projectConfig.banner, {pkg: projectConfig.pkg}))
    .pipe(gulp.dest(destination));
});

gulp.task('dist-minify-app-css', ['style'], function () {

  var cssFiles = path.join(projectConfig.path.srcDir, projectConfig.path.asset.css);

  var newCssFileName = path.join(
    projectConfig.path.asset.cssDir,
    projectConfig.buildDistFileName(projectConfig.pkg.name, 'css')
  );

  return gulp
    .src(cssFiles, {base: './'})
    .pipe(minifyCSS({keepBreaks: true}))
    .pipe($.rename(newCssFileName))
    .pipe(header(projectConfig.banner, {pkg: projectConfig.pkg}))
    .pipe(gulp.dest(projectConfig.path.distDir));
});

gulp.task('dist-minify-app-html', function () {

  var source = path.join(projectConfig.path.srcDir, projectConfig.path.app.templates);
  var destination = path.join(projectConfig.path.distDir, projectConfig.path.appDir);

  return gulp.src(source)
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(destination))

});

/**
 * MINIFY BOWER
 */
gulp.task('dist-minify-bower-js', function () {
  var source = projectConfig.bower.files.js;
  var destination = path.join(projectConfig.path.distDir, projectConfig.path.libDir);
  var fileName = projectConfig.buildDistFileName('bower', 'js');

  return gulp
    .src(source)
    .pipe($.concat(fileName))
    .pipe($.uglify())
    .pipe(header(projectConfig.banner, {pkg: projectConfig.pkg}))
    .pipe(gulp.dest(destination));
});

gulp.task('dist-minify-bower-css', function () {

  var cssFiles = projectConfig.bower.files.css;
  var fileName = projectConfig.buildDistFileName('bower', 'css');
  var newCssFileName = path.join(
    projectConfig.path.libDir,
    fileName
  );

  return gulp
    .src(cssFiles, {base: './'})
    .pipe($.concat(newCssFileName))
    .pipe(minifyCSS({keepBreaks: true}))
    .pipe(header(projectConfig.banner, {pkg: projectConfig.pkg}))
    .pipe(gulp.dest(projectConfig.path.distDir));
});

/**
 * DIST INDEX INJECT
 */
gulp.task('dist-index-inject', ['dist-index-copy'], function () {

  var source = [];
  source.push(path.join(projectConfig.path.distDir, projectConfig.path.asset.css));
  source.push(path.join(projectConfig.path.distDir, projectConfig.path.appDir, '**/*.js'));

  var bowerFiles = [];
  bowerFiles.push(path.join(projectConfig.path.distDir, projectConfig.path.libDir, '**/*.js'));
  bowerFiles.push(path.join(projectConfig.path.distDir, projectConfig.path.libDir, '**/*.css'));

  return gulp
    .src(path.join(projectConfig.path.distDir, projectConfig.path.main))
    .pipe($.inject(gulp.src(bowerFiles, {read: false}), {name: 'bower', relative: true}))
    .pipe($.inject(gulp.src(source), {relative: true}))
    .pipe(gulp.dest(projectConfig.path.distDir));

});

gulp.task('dist-index-copy', ['dist-bower', 'dist-app'], function () {

  return gulp
    .src(path.join(projectConfig.path.srcDir, projectConfig.path.main))
    .pipe(gulp.dest(projectConfig.path.distDir));

});

/**
 * SERVER
 */
gulp.task('dist-server', function () {

  browserSync({
    server: {
      baseDir: projectConfig.path.distDir,
      index:   projectConfig.path.main,
      port:    4000,
      browser: 'Google Chrome',
      open:    true
    }
  });

});

/* ----------------------------------------------------------------
 DEFAULT
 ---------------------------------------------------------------- */
gulp.task('default', ['serve']);
