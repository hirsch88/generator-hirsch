'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var hirschUtils = require('./../util');
var generators = yeoman.generators;

var HirschGenerator = yeoman.generators.Base.extend({
  constructor: function() {
    // arguments and options should be
    // defined in the constructor.
    generators.Base.apply(this, arguments);
    this.appname = arguments['0'][0] || path.basename(process.cwd());
    this.askAppname = arguments['0'][0] ? false : true;
    this.appname = this._.camelize(this._.slugify(this._.humanize(this
      .appname)));

    if(!this.askAppname) {
      if(this.appname !== path.basename(process.cwd())) {
        this.destinationRoot(this.appname);
      }
    }
  },

  initializing: function() {
    this.projectConfig = require('./templates/_project.config.js')(
      true);
    this.projectConfig.date = hirschUtils.getCreationDate();
  },

  welcome: function() {
    this.log(yosay(
      'Welcome to the marvelous ' + chalk.red('Hirsch') +
      ' generator!'
    ));
  },

  prompting: function() {
    var done = this.async();
    var prompts = [];

    if(this.askAppname) {
      prompts.push({
        name: 'appname',
        message: 'What would you like to name the app?',
        default: this.appname || path.basename(process.cwd())
      });
    }

    prompts.push({
      name: 'prefix',
      message: 'Angular app prefix (2 chars):',
      default: 'my'
    });

    prompts.push({
      name: 'description',
      message: 'Describe your application:'
    });

    prompts.push({
      name: 'author',
      message: 'Who is the author?'
    });

    prompts.push({
      type:    'list',
      name:    'cssExtension',
      message: 'Do you want to use {less} or Sass? ',
      choices: ['{less}', 'Sass'],
      default: '{less}'
    });


    prompts.push({
      type: 'confirm',
      name: 'styleSourcemaps',
      message: 'Do you want to use sourcemaps for your less/scss file?',
      default: true
    });

     prompts.push({
      type: 'confirm',
      name: 'autoPrefixr',
      message: 'Do you want to automatically generate missing css-prefixes?',
      default: true
    });


    prompts.push({
      type: 'confirm',
      name: 'useTypescript',
      message: 'Do you want to use TypeScript?',
      default: false
    });


    prompts.push({
      when: function(props) {
        return props.useTypescript;
      },
      name: 'typingsPath',
      message: 'Where do you want to store the type definitions (path relative to root)?',
      default: 'typings'
    });

    this.prompt(prompts, function(props) {
      if(this.askAppname) {
        this.appname = props.appname;
        if(this.appname !== path.basename(process.cwd())) {
          this.destinationRoot(this.appname);
        }
      }

      this.cssExtension = props.cssExtension;
      this.useLess = props.cssExtension === '{less}';
      this.useSass = props.cssExtension === 'Sass';
      this.prefix = props.prefix;
      this.styleSourcemaps = props.styleSourcemaps;
      this.autoPrefixr = props.autoPrefixr;
      this.description = props.description;
      this.author = props.author;
      this.useTypescript = props.useTypescript;
      this.typingsPath = props.typingsPath;

      done();
    }.bind(this));
  },

  /**
   * INIT
   * Declare some helper functions
   */
  init: function() {
    var _this = this;
    var copyBase = function(copyFunc) {
      var rest = Array.prototype.slice.call(arguments, 1);
      return function() {
        var args = Array.prototype.slice.call(arguments);
        var newRest = rest.slice(0);
        if(typeof args[0] === 'object') {
          newRest.push(args.shift());
        }

        var tgtSegs = args.map(function(s) {
          return(_this.useTypescript ? s.replace(/\.js$/,
              '.ts') :
            s).replace(/\.js!$/, '.js');
        });

        var srcSegs = tgtSegs.map(function(s) {
          var replaces = [{
            p: /^app$/,
            r: 'app-ts'
          }, {
            p: /^app\//,
            r: 'app-ts/'
          }, {
            p: /^test$/,
            r: 'test-ts'
          }, {
            p: /^test\//,
            r: 'test-ts/'
          }];

          var copiesScripts = args.some(function(s) {
            return /\.js$/.test(s);
          });

          return _this.useTypescript && copiesScripts ? replaces.reduce(
            function(prev, curr) {
              return prev.replace(curr.p, curr.r);
            }, s) : s;
        }).map(function(s) {
          return s.replace(/!$/, '');
        });

        // filter out globs from target path
        tgtSegs = tgtSegs.filter(function(s) {
          return s.indexOf('*') < 0 && !/!$/.test(s);
        });

        var srcPath = path.join.apply(null, srcSegs);
        var tgtPath = path.join.apply(null, tgtSegs);
        copyFunc.apply(null, [_this.templatePath(srcPath), _this.destinationPath(
          tgtPath)].concat(newRest));
      };
    };

    this.copyFile = copyBase(this.fs.copy.bind(this.fs));
    this.copyTpl = copyBase(this.fs.copyTpl.bind(this.fs), this.projectConfig, {
      'interpolate': /<%=([\s\S]+?)%>/g
    });
    this.copyDir = copyBase(this.directory.bind(this));
  },

  addToProjectConfig: function() {
    this.projectConfig.prompts = {};
    this.projectConfig.prompts.appname = this.appname;
    this.projectConfig.prompts.prefix = this.prefix;
    this.projectConfig.prompts.description = this.description;
    this.projectConfig.prompts.author = this.author;
    this.projectConfig.prompts.useTypescript = this.useTypescript;
    this.projectConfig.prompts.cssExtension = this.cssExtension;
    this.projectConfig.prompts.styleSourcemaps = this.styleSourcemaps;
    this.projectConfig.prompts.autoPrefixr = this.autoPrefixr;
    this.projectConfig.prompts.useLess = this.useLess;
    this.projectConfig.prompts.useSass = this.useSass;
    this.projectConfig.prompts.typingsPath = this.typingsPath;
  },

  displayName: function() {
    this.log('Creating ' + this.appname + ' app based on Hirsch.');
  },

  scaffoldFolders: function() {
    this.mkdir('src');
    this.mkdir('src/app');
    this.mkdir('src/app/common/decorators');
    this.mkdir('src/app/common/directives');
    this.mkdir('src/app/common/filters');
    this.mkdir('src/app/common/models');
    this.mkdir('src/app/common/services');
    this.mkdir('src/app/common/services/converters');
    this.mkdir('src/app/common/services/rest');
    this.mkdir('src/app/common/templates');
    this.mkdir('src/app/common/util');
    this.mkdir('src/app/common/views');
    this.mkdir('src/app/core');
    this.mkdir('src/assets');
    this.mkdir('src/assets/config');
    this.mkdir('src/assets/media');
    this.mkdir('src/assets/fonts');
    this.mkdir('src/assets/i18n');
    this.mkdir('src/lib');
    this.mkdir('test');
    this.mkdir('test/lib');
    this.mkdir('test/unit');
    this.mkdir('test/e2e');

    if(this.useLess){
      this.mkdir('src/assets/less');
    }else{
      this.mkdir('src/assets/sass');
    }

  },

  packageFiles: function() {
    this.template('_package.json', 'package.json', this.projectConfig);
    this.template('_bower.json', 'bower.json', this.projectConfig);
    this.template('_bowerrc', '.bowerrc', this.projectConfig);
  },

  taskRunner: function() {
    this.template('_gulpfile.js', 'gulpfile.js', this.projectConfig);
    this.copyTpl(this.projectConfig.path.taskDir, '*.js!');

    if(this.useLess){
        this.copyTpl(this.projectConfig.path.taskDir, 'css!', 'less.js!');
    }else{
        this.copyTpl(this.projectConfig.path.taskDir, 'css!', 'sass.js!');
    }

    if(this.autoPrefixr){
        this.copyTpl(this.projectConfig.path.taskDir, 'autoPrefixr!', 'css-auto-prefix.js!');
    }

    if(this.projectConfig.prompts.useTypescript) {
      this.copyTpl(this.projectConfig.path.taskDir, 'ts!', '*.js!');
    } else {
      this.copyTpl(this.projectConfig.path.taskDir, 'js!', '*.js!');
    }
  },

  projectfiles: function() {
    this.copy('_project.config.js', 'project.config.js');
    this.copy('_editorconfig', '.editorconfig');
    this.template('_gitignore', '.gitignore', this.projectConfig);

    if(this.projectConfig.prompts.useTypescript) {
      this.template(this.templatePath('_tsd.json'), this.destinationPath('tsd.json'), this.projectConfig);
      this.copy(this.templatePath('_tsconfig.json'), this.destinationPath('tsconfig.json'));
      this.copy(this.templatePath('_tslint.json'), this.destinationPath('tslint.json'));
    } else {
      this.copy(this.templatePath('_jshintrc'), this.destinationPath('.jshintrc'));
    }
  },

  assets: function() {
    this.copyDir(this.projectConfig.path.srcDir, this.projectConfig.path.assets.configDir);
    this.copyDir(this.projectConfig.path.srcDir, this.projectConfig.path.assets.fontDir);
    this.copyDir(this.projectConfig.path.srcDir, this.projectConfig.path.assets.mediaDir);
    this.copyDir(this.projectConfig.path.srcDir, this.projectConfig.path.assets.i18nDir);

    if(this.useLess){
        this.copyDir(this.projectConfig.path.srcDir, this.projectConfig.path.assets.lessDir);
    }else{
        this.copyDir(this.projectConfig.path.srcDir, this.projectConfig.path.assets.sassDir);
    }

  },

  testRunnerFiles: function() {
    this.template('_karma-midway.config.js', 'karma-midway.config.js', this.projectConfig);
    this.template('_karma-shared.config.js', 'karma-shared.config.js', this.projectConfig);
    this.template('_karma-unit.config.js', 'karma-unit.config.js', this.projectConfig);
    this.copyTpl(this.projectConfig.path.testDir, '**', '*.js');
  },

  appFiles: function() {
    this.copyTpl(this.projectConfig.path.srcDir, this.projectConfig.path.main);
    this.copyTpl(this.projectConfig.path.srcDir, this.projectConfig.path.app.main);
    if(!this.projectConfig.prompts.useTypescript) {
      this.copyTpl(this.projectConfig.path.srcDir, this.projectConfig.path.app.util);
    }
  },

  coreFiles: function() {
    this.copyTpl(this.projectConfig.path.srcDir, this.projectConfig.path.app.coreDir, '**', '*.js');
  },

  commonFiles: function() {
    this.copyTpl(this.projectConfig.path.srcDir, this.projectConfig.path.app.commonDir, '**', '*.js');
  },

  layoutFiles: function() {
    this.copyTpl(this.projectConfig.path.srcDir, this.projectConfig.path.app.layoutDir, '**', '*.js');
    this.copyTpl(this.projectConfig.path.srcDir, this.projectConfig.path.app.layoutDir, '**', '*.html');
  },

  homeExample: function() {
    this.copyTpl(this.projectConfig.path.srcDir, this.projectConfig.path.appDir, 'home', '**', '*.js');
    this.copyTpl(this.projectConfig.path.srcDir, this.projectConfig.path.appDir, 'home', '**', '*.html');
  },

  runNpm: function() {
    this.npmInstall();
    this.bowerInstall();
  },

  installTypeDefs: function() {
    //download type definitions if TypeScript was enabled
    if(this.useTypescript) {
      this.env.runLoop.add('install', function(done) {
        this.emit('tsdReinstall');

        this.log('Running ' + chalk.yellow.bold('tsd reinstall --save') +
          '. If this fails run the commands yourself after running `npm install -g tsd`.');

        this.spawnCommand('node', ['node_modules/tsd/build/cli.js', 'reinstall', '--save'])
          .on('exit', function(err) {
            if(err === 127) {
              this.log.error('Could not find tsd. Please install with `npm install -g tsd`.');
            }
            this.emit('tsdReinstall:end');
            done();
          }.bind(this));
      }.bind(this), {
        once: 'tsd reinstall',
        run: false
      });
    }
  },

  end: function() {
    hirschUtils.hirschPlay();
    this.log('');
    this.log(hirschUtils.hirschSay());
    this.log('Go to your project folder and run ' + chalk.bold.yellow(
      'gulp serve'));
    this.log('Then visit your app on ' + chalk.bold.yellow(
      'http://localhost:3000'));
    this.log('');
  }
});

module.exports = HirschGenerator;
