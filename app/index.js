'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var helper = require('./../helper');
var generators = yeoman.generators;

var HirschGenerator = yeoman.generators.Base.extend({


  constructor: function () {
    // arguments and options should be
    // defined in the constructor.
    generators.Base.apply(this, arguments);
    this.appname = arguments['0'][0] || path.basename(process.cwd());
    this.askAppname = arguments['0'][0] ? false : true;
    this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));

    if (!this.askAppname) {
      if (this.appname !== path.basename(process.cwd())) {
        this.destinationRoot(this.appname)
      }
    }
  },

  initializing: function () {
    this.projectConfig = require('./templates/_project.config.js')(true);
    this.projectConfig.date = helper.getCreationDate();
  },

  welcome: function () {
    this.log(yosay(
      'Welcome to the marvelous ' + chalk.red('Hirsch') + ' generator!'
    ));
  },

  prompting: function () {
    var done = this.async();
    var prompts = [];

    if (this.askAppname) {
      prompts.push({
        type:    'string',
        name:    'appname',
        message: 'What is the name of your app?',
        default: this.appname || path.basename(process.cwd())
      });
    }

    prompts.push({
      type:    'string',
      name:    'prefix',
      message: 'Angular app prefix (2 chars):',
      default: 'my'
    });

    prompts.push({
      type:    'string',
      name:    'description',
      message: 'Describe your application:'
    });

    prompts.push({
      type:    'string',
      name:    'author',
      message: 'How is the author?'
    });

    this.prompt(prompts, function (props) {
      if (this.askAppname) {
        this.appname = props.appname;
        if (this.appname !== path.basename(process.cwd())) {
          this.destinationRoot(this.appname)
        }
      }

      this.prefix = props.prefix;
      this.description = props.description;
      this.author = props.author;

      done();
    }.bind(this));
  },

  addToProjectConfig: function () {
    this.projectConfig.prompts = {};
    this.projectConfig.prompts.appname = this.appname;
    this.projectConfig.prompts.prefix = this.prefix;
    this.projectConfig.prompts.description = this.description;
    this.projectConfig.prompts.author = this.author;
  },

  displayName: function () {
    this.log('Creating ' + this.appname + ' app based on Hirsch.');
  },

  scaffoldFolders: function () {
    this.mkdir('src');
    this.mkdir('src/app');
    this.mkdir('src/app/common/services');
    this.mkdir('src/app/common/directives');
    this.mkdir('src/app/common/templates');
    this.mkdir('src/app/common/decorators');
    this.mkdir('src/app/common/filters');
    this.mkdir('src/app/core');
    this.mkdir('src/assets');
    this.mkdir('src/assets/medias');
    this.mkdir('src/assets/fonts');
    this.mkdir('src/assets/less');
    this.mkdir('src/assets/i18n');
    this.mkdir('src/lib');
    this.mkdir('test');
    this.mkdir('test/lib');
    this.mkdir('test/unit');
    this.mkdir('test/midway');
    this.mkdir('test/e2e');
  },

  packageFiles: function () {
    this.template('_package.json', 'package.json', this.projectConfig);
    this.template('_bower.json', 'bower.json', this.projectConfig);
    this.template('_bowerrc', '.bowerrc', this.projectConfig);
    this.template('_gulpfile.js', 'gulpfile.js', this.projectConfig);
  },

  projectfiles: function () {
    this.copy('_project.config.js', 'project.config.js');
    this.copy('_editorconfig', '.editorconfig');
    this.copy('_gitignore', '.gitignore');
    this.copy('_jshintrc', '.jshintrc');
  },

  assets: function () {
    this.directory(
      this.templatePath(path.join(this.projectConfig.path.srcDir, this.projectConfig.path.assetsDir)),
      this.destinationPath(path.join(this.projectConfig.path.srcDir, this.projectConfig.path.assetsDir))
    );
  },

  testRunnerFiles: function () {
    this.template('_karma-midway.config.js', 'karma-midway.config.js', this.projectConfig);
    this.template('_karma-shared.config.js', 'karma-shared.config.js', this.projectConfig);
    this.template('_karma-unit.config.js', 'karma-unit.config.js', this.projectConfig);
    this.directory(
      this.templatePath(this.projectConfig.path.testDir),
      this.destinationPath(this.projectConfig.path.testDir)
    );
  },

  appFiles: function () {
    // Index
    this.template(
      this.templatePath(path.join(this.projectConfig.path.srcDir, this.projectConfig.path.main)),
      this.destinationPath(path.join(this.projectConfig.path.srcDir, this.projectConfig.path.main)), this.projectConfig
    );

    // App
    this.template(
      this.templatePath(path.join(this.projectConfig.path.srcDir, this.projectConfig.path.app.main)),
      this.destinationPath(path.join(this.projectConfig.path.srcDir, this.projectConfig.path.app.main)), this.projectConfig
    );
  },

  coreFiles: function () {
    var corePath = path.join(this.projectConfig.path.srcDir, this.projectConfig.path.app.coreDir);
    this.template(this.templatePath(path.join(corePath, 'module.js')), this.destinationPath(path.join(corePath, 'module.js')), this.projectConfig);

    this.template(this.templatePath(path.join(corePath, 'config/module.js')), this.destinationPath(path.join(corePath, 'config/module.js')), this.projectConfig);
    this.template(this.templatePath(path.join(corePath, 'config/angular.config.js')), this.destinationPath(path.join(corePath, 'config/angular.config.js')), this.projectConfig);
    this.template(this.templatePath(path.join(corePath, 'config/thirdParty.config.js')), this.destinationPath(path.join(corePath, 'config/thirdParty.config.js')), this.projectConfig);
    this.template(this.templatePath(path.join(corePath, 'config/run.js')), this.destinationPath(path.join(corePath, 'config/run.js')), this.projectConfig);

    this.template(this.templatePath(path.join(corePath, 'routing/module.js')), this.destinationPath(path.join(corePath, 'routing/module.js')), this.projectConfig);
    this.template(this.templatePath(path.join(corePath, 'routing/router.js')), this.destinationPath(path.join(corePath, 'routing/router.js')), this.projectConfig);

    this.template(this.templatePath(path.join(corePath, 'util/module.js')), this.destinationPath(path.join(corePath, 'util/module.js')), this.projectConfig);
    this.template(this.templatePath(path.join(corePath, 'util/events.js')), this.destinationPath(path.join(corePath, 'util/events.js')), this.projectConfig);
    this.template(this.templatePath(path.join(corePath, 'util/util.js')), this.destinationPath(path.join(corePath, 'util/util.js')), this.projectConfig);
    this.template(this.templatePath(path.join(corePath, 'util/logger.js')), this.destinationPath(path.join(corePath, 'util/logger.js')), this.projectConfig);
  },

  layoutFiles: function () {
    var layoutPath = path.join(this.projectConfig.path.srcDir, this.projectConfig.path.app.layoutDir);

    this.template(
      this.templatePath(path.join(layoutPath, 'views', 'admin.html')),
      this.destinationPath(path.join(layoutPath, 'views', 'admin.html')), this.projectConfig
    );
    this.template(this.templatePath(path.join(layoutPath, 'views', 'admin.js')), this.destinationPath(path.join(layoutPath, 'views', 'admin.js')), this.projectConfig);

    this.copy(this.templatePath(path.join(layoutPath, 'views', 'public.html')), this.destinationPath(path.join(layoutPath, 'views', 'public.html')));
    this.template(this.templatePath(path.join(layoutPath, 'views', 'public.js')), this.destinationPath(path.join(layoutPath, 'views', 'public.js')), this.projectConfig);

    this.copy(
      this.templatePath(path.join(layoutPath, 'directives', 'header.directive.html')),
      this.destinationPath(path.join(layoutPath, 'directives', 'header.directive.html'))
    );

    this.template(
      this.templatePath(path.join(layoutPath, 'directives', 'header.directive.js')),
      this.destinationPath(path.join(layoutPath, 'directives', 'header.directive.js')), this.projectConfig
    );

    this.template(
      this.templatePath(path.join(layoutPath, 'layout.module.js')),
      this.destinationPath(path.join(layoutPath, 'layout.module.js')), this.projectConfig
    );

    this.template(
      this.templatePath(path.join(layoutPath, 'views/layoutViews.module.js')),
      this.destinationPath(path.join(layoutPath, 'views/layoutViews.module.js')), this.projectConfig
    );

    this.template(
      this.templatePath(path.join(layoutPath, 'directives/layoutDirectives.module.js')),
      this.destinationPath(path.join(layoutPath, 'directives/layoutDirectives.module.js')), this.projectConfig
    );

  },

  homeExample: function () {
    var homePath = path.join(
      this.projectConfig.path.srcDir,
      this.projectConfig.path.appDir,
      'home'
    );

    this.template(
      this.templatePath(path.join(homePath, 'home.module.js')),
      this.destinationPath(path.join(homePath, 'home.module.js')), this.projectConfig
    );

    this.template(
      this.templatePath(path.join(homePath, 'views/homeViews.module.js')),
      this.destinationPath(path.join(homePath, 'views/homeViews.module.js')), this.projectConfig
    );

    this.template(
      this.templatePath(path.join(homePath, '/views/home.js')),
      this.destinationPath(path.join(homePath, '/views/home.js')), this.projectConfig
    );

    this.copy(
      this.templatePath(path.join(homePath, '/views/home.html')),
      this.destinationPath(path.join(homePath, '/views/home.html'))
    );

  },

  runNpm: function () {
    this.npmInstall();
    this.bowerInstall();
  },



  end: function () {
    this.log('');
    this.log(helper.hirschSay());
    this.log('Go to your project folder and run ' + chalk.bold.yellow('gulp serve'));
    this.log('Than visit your app on ' + chalk.bold.yellow('http://localhost:3000'));
    this.log('');
  }
});


module.exports = HirschGenerator;
