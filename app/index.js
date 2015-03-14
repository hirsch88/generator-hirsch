'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.projectConfig = require('./templates/project.config')(true);
  },
  prompting:    function () {
    var done = this.async();
    this.log(yosay('Welcome to the marvelous ' + chalk.red('Hirsch') + ' generator!'));
    var prompts = [
      {
        type:    'string',
        name:    'appName',
        message: 'How would u like to call your app?',
        default: path.basename(process.cwd())
      },
      {
        type:    'string',
        name:    'appSign',
        message: 'Angular app prefix sign like ng(2chars):',
        default: 'my'
      },
      {
        type:    'string',
        name:    'description',
        message: 'Describe your application:'
      },
      {
        type:    'string',
        name:    'author',
        message: 'How is the author?',
        default: 'Gery Hirschfeld <gery.hirschfeld@w3tec.ch>'
      },
      {
        type:    'list',
        name:    'taskRunner',
        message: 'Which taskRunner do you want:',
        choices: [
          'Gulp - Automate and enhance your workflow',
          'GRUNT - The JavaScript Task Runner'
        ],
        default: 0
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.appSign = props.appSign;
      this.description = props.description;
      this.taskRunner = props.taskRunner;
      this.hasGulp = this.taskRunner.indexOf('Gulp') > -1;
      this.author = props.author;
      if (this.appName !== path.basename(process.cwd())) {
        this.destinationRoot(this.appName)
      }

      done();
    }.bind(this));
  },
  writing:      {
    prompts: function () {
      var done = this.async();
      this.log(chalk.bold.yellow('prompts'));
      this.projectConfig.prompts = {};
      this.projectConfig.prompts.appName = this.appName;
      this.projectConfig.prompts.appSign = this.appSign;
      this.projectConfig.prompts.description = this.description;
      this.projectConfig.prompts.hasGulp = this.hasGulp;
      this.projectConfig.prompts.author = this.author;
      done();
    },
    devTools: function () {
      this.log(chalk.bold.yellow('devTools'));
      this.log(this.projectConfig);

      this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
      this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
      this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));


      this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this.projectConfig);
      this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), this.projectConfig);
      this.fs.copyTpl(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'), this.projectConfig);

    },
    task:     function () {
      this.log(chalk.bold.yellow('taskRunner'));
      /**
       * GULP
       */
      if (this.projectConfig.prompts.hasGulp) {
        this.fs.copy(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'));
      }

      /**
       * GRUNT
       */
      else {
        this.fs.copy(this.templatePath('Gruntfile.js'), this.destinationPath('Gruntfile.js'));
        this.directory(
          this.templatePath('grunt'),
          this.destinationPath('grunt')
        );
      }
    },
    app:      function () {
      this.log(chalk.bold.yellow('app'));

    },
    test:     function () {
      this.log(chalk.bold.yellow('test'));

    }
  },
  install:      function () {
    //this.installDependencies({
    //  skipInstall: this.options['skip-install'],
    //  skipMessage: ''
    //});

  },
  end:          function () {
    this.log('');
    this.log(helper.hirschSay());
    this.log('Go to your project folder and run ' + chalk.bold.yellow('grunt serve'));
    this.log('Than visit your app on ' + chalk.bold.yellow('http://localhost:3000'));
    this.log('');
  }
});
