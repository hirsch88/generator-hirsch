'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  /**
   * INITIALIZING
   * Loads the projectConfig into the scope of the generator
   */
  initializing: function () {
    this.projectConfig = require('./templates/project.config')(true);
    this.projectConfig.date = helper.getCreationDate();
  },
  /**
   * PROMPTING
   * Asking some questions
   */
  prompting:    function () {
    var done = this.async();
    this.log(yosay('Welcome to the marvelous ' + chalk.red('Hirsch') + ' generator!'));
    var prompts = [
      {
        name:    'appName',
        message: 'How would u like to call your app?',
        default: path.basename(process.cwd())
      },
      {
        name:    'prefix',
        message: 'Angular app prefix sign like ng(2chars):',
        default: 'my'
      },
      {
        name:    'description',
        message: 'Describe your application:'
      },
      {
        name:    'author',
        message: 'Who is the author?',
        default: 'Gery Hirschfeld <gery.hirschfeld@w3tec.ch>'
      },
      {
        type: 'confirm',
        name: 'useTypescript',
        message: 'Do you want to use TypeScript?',
        default: 'Y'
      },
      {
        when: function (props) {
          return props.useTypescript;
        },
        name: 'typingsPath',
        message: 'Where do you want to store the type definitions (path relative to root)?',
        default: 'typings'
      }
    ];

    this.prompt(prompts, function (props) {

      this.appName = props.appName;
      this.prefix = props.prefix;
      this.description = props.description;
      this.author = props.author;
      this.useTypescript = props.useTypescript;
      this.typingsPath = props.typingsPath;
      if (this.appName !== path.basename(process.cwd())) {
        this.destinationRoot(this.appName);
      }

      done();
    }.bind(this));
  },
  /**
   * WRITING
   * Generates, copies the marvelous application
   */
  writing: {
    /**
     * INIT
     * Declare some helper functions
     */
    init: function() {
      var _this = this;
      var copyBase = function(copyFunc) {
        var rest = Array.prototype.slice.call(arguments, 1);
        return function () {
          var relPath = path.join.apply(null, Array.prototype.map.call(arguments, _this.typescriptFilter));
          var relTargetPath = path.join.apply(null, Array.prototype.filter.call(arguments, function (seg) {
            return seg.indexOf('*') < 0 && !/^\./.test(seg);
          }).map(_this.typescriptFilter));
          console.log(relPath + ' -> ' + relTargetPath);
          copyFunc.apply(null, [_this.templatePath(relPath), _this.destinationPath(relTargetPath)].concat(rest));
        };
      }

      this.copyFile = copyBase(this.fs.copy.bind(this.fs));
      this.copyTpl = copyBase(this.fs.copyTpl.bind(this.fs), this.projectConfig);
      this.copyDir = copyBase(this.directory.bind(this));
      this.typescriptFilter = function (s) {
        return _this.projectConfig.prompts.useTypescript ? s.replace(/\.js$/, '.ts') : s;
      };
    },
    /**
     * PROMPTS
     * Adds the answers of the user to the project config object
     */
    prompts: function () {
      var done = this.async();
      this.projectConfig.prompts = {};
      this.projectConfig.prompts.appName = this.appName;
      this.projectConfig.prompts.prefix = this.prefix;
      this.projectConfig.prompts.description = this.description;
      this.projectConfig.prompts.author = this.author;
      this.projectConfig.prompts.useTypescript = this.useTypescript;
      this.projectConfig.prompts.typingsPath = this.typingsPath;
      done();
    },
    /**
     * DEV TOOLS
     * Creates the dev config files for some tools
     */
    devTools: function () {

      this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
      this.fs.copyTpl(this.templatePath('gitignore'), this.destinationPath('.gitignore'), this.projectConfig);
      this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));

      this.fs.copy(this.templatePath('project.config.js'), this.destinationPath('project.config.js'));


      this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this.projectConfig);
      this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), this.projectConfig);
      this.fs.copyTpl(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'), this.projectConfig);

      this.fs.copyTpl(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'), this.projectConfig);

      if(this.projectConfig.prompts.useTypescript) {
        this.fs.copyTpl(this.templatePath('_tsd.json'), this.destinationPath('tsd.json'), this.projectConfig);
        this.fs.copy(this.templatePath('_tsconfig.json'), this.destinationPath('tsconfig.json'));
      }
    },
    /**
     * BOILERPLATE APPLICATION
     * Creates the basic of the app and some examples
     */
    app:      function () {
      // Assets
      this.copyDir(this.projectConfig.path.srcDir, this.projectConfig.path.assetsDir);

      // Index
      this.copyTpl(this.projectConfig.path.srcDir, this.projectConfig.path.main);

      this.copyTpl(this.projectConfig.path.srcDir, this.projectConfig.path.appDir, '**', '*.js');
      this.copyTpl(this.projectConfig.path.srcDir, this.projectConfig.path.appDir, '**', '*.html');
      this.copyFile(this.projectConfig.path.srcDir, this.projectConfig.path.appDir, '**', '.gitkeep');
    },
    /**
     * TEST FILES
     * Includes some test files and as well the configs
     */
    test: function () {
      this.copyFile(this.projectConfig.path.testDir, this.projectConfig.path.test.specs);

      this.copyFile(this.projectConfig.path.testDir, this.projectConfig.path.libDir, '**', '*.js');

      this.fs.copy(this.templatePath('karma-shared.config.js'), this.destinationPath('karma-shared.config.js'));
      this.fs.copy(this.templatePath('karma-unit.config.js'), this.destinationPath('karma-unit.config.js'));
      this.fs.copy(this.templatePath('karma-midway.config.js'), this.destinationPath('karma-midway.config.js'));

    }
  },
  install:      function () {
    this.installDependencies();

    // download type definitions if TypeScript was enabled
    if (this.useTypescript) {
      this.env.runLoop.add('install', function (done) {
        this.emit('tsdReinstall');

        this.log('Running ' + chalk.yellow.bold('tsd reinstall --save') + '. If this fails run the commands yourself after running `npm install -g tsd`.');

        this.spawnCommand('node', ['node_modules/tsd/build/cli.js', 'reinstall', '--save'])
          .on('exit', function (err) {
            if (err === 127) {
              this.log.error('Could not find tsd. Please install with `npm install -g tsd`.');
            }
            this.emit('tsdReinstall:end');
            done();
          }.bind(this));
      }.bind(this), { once: 'tsd reinstall', run: false });
    }
  },
  end:          function () {
    this.log('');
    this.log(helper.hirschSay());
    this.log('Go to your project folder and run ' + chalk.bold.yellow('gulp serve'));
    this.log('Then visit your app on ' + chalk.bold.yellow('http://localhost:3000'));
    this.log('');
  }
});
