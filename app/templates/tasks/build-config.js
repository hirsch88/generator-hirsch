'use strict';

var projectConfig = require(process.cwd() + '/project.config.js')();
var gulp = require('gulp');
var path = require('path');
var template = require('gulp-template');
var rename = require('gulp-rename');
var chalk = require('chalk');

/**
 * BUILD CONFIG CONSTANT
 */
gulp.task('build-config', function () {
  var source = path.join(projectConfig.path.srcDir, projectConfig.path.asset.configDir);
  var destination = path.join(projectConfig.path.srcDir, projectConfig.path.app.coreDir, 'constants');
  var fileName = 'config.constant.js';

  var env = getEnvironment();
  var context = getJsonConfig();

  if (context) {
    return gulp.src(source + '/_' + fileName)
      .pipe(rename(fileName))
      .pipe(template(context))
      .pipe(gulp.dest(destination));
  }

  //////////////////////////////////////////////////

  function getJsonConfig() {
    try {
      var context = require(path.join(
        process.cwd(),
        projectConfig.path.srcDir,
        projectConfig.path.asset.config.environmentsDir,
        env + '.json'
      ));
      context.prefix = projectConfig.pkg.prefix;
      console.log('');
      console.log(chalk.blue('i ') + 'Environment \'' + chalk.cyan(env) + '\'');
      console.log('');
      return context;
    } catch (e) {
      console.log('');
      console.log(chalk.red('X ') + 'Environment \'' + chalk.cyan(env) + '\' has no json file!');
      console.log('');
      return false;
    }
  }

  function getEnvironment() {
    var env = 'development';
    if (process.argv && process.argv.length > 3) {
      env = process.argv[process.argv.length - 1].replace('-', '').replace('-', '');
      switch (env) {
        case 'd':
        case 'dev':
        case 'development':
        case 'buildconfig':
        case 'build':
        case 'serve':
          return 'development';
        case 'p':
        case 'prod':
        case 'production':
        case 'dist':
        case 'serve-dist':
          return 'production';
      }
    }
    return env;
  }

});
