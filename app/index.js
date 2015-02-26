'use strict';

var yeoman = require('yeoman-generator');
var helper = require('./../helper');
var chalk = require('chalk');
var yosay = require('yosay');
//var util = require('util');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },
  prompting:    function () {
    var done = this.async();
    this.log(yosay('Welcome to the marvelous ' + chalk.red('Hirsch') + ' generator! NEW'));
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
        message: 'Angualar app prefix sign like ng(2chars): ',
        default: 'my'
      },
      {
        type:    'string',
        name:    'description',
        message: 'Describe your app: '
      },
      {
        type:    'string',
        name:    'author',
        message: 'How is the author?',
        default: 'Gery Hirschfeld <gery.hirschfeld@w3tec.ch>'
      },
      {
        type:    'list',
        name:    'appStructure',
        message: 'Which app structure do you want: ',
        choices: [
          'Module-Based',
          'Route-Based'
        ],
        default: 0
      }
    ];
    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.appStructure = props.appStructure;
      this.appSign = props.appSign;
      this.description = props.description;
      this.author = props.author;
      if (this.appName !== path.basename(process.cwd())) {
        this.destinationRoot(this.appName)
      }
      done();
    }.bind(this));
  },
  writing:      {
    app: function () {
      this.directory(
        this.templatePath('grunt'),
        this.destinationPath('grunt')
      );
      var pathConfig = require(this.templatePath('grunt/config/paths.json'));

      /**
       * Build projext infos
       */
      function getCreationDate() {
        var today = new Date();
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
          "November", "December"];
        return monthNames[today.getMonth()] + ', ' + today.getFullYear();
      }

      var context = {
        appName:      this.appName,
        appStructure: this.appStructure,
        appSign:      this.appSign,
        author:       this.author,
        description:  this.description,
        date:         getCreationDate(),
        main:         helper.joinPath([pathConfig.srcDir, pathConfig.main]),
        appJs:        helper.joinPath([pathConfig.srcDir, pathConfig.app.main]),
        scripts:      helper.joinPath([pathConfig.srcDir, pathConfig.app.scripts]),
        bowerDir:     helper.joinPath([pathConfig.srcDir, pathConfig.libDir]),
        mediaDir:     helper.joinPath([pathConfig.asset.mediaDir]),
        appDir:       pathConfig.appDir,
        viewDir:      pathConfig.app.viewDir
      };

      /**
       * Project conf files
       */
      this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), context);
      this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), context);
      this.fs.copyTpl(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'), context);

      this.fs.copy(this.templatePath('_jsdoc.json'), this.destinationPath('jsdoc.json'));
      this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
      this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
      this.fs.copy(this.templatePath('Gruntfile.js'), this.destinationPath('Gruntfile.js'));
      this.fs.copy(this.templatePath('.jshintrc'), this.destinationPath('.jshintrc'));

      /**
       * Assets
       */
      this.fs.copy(
        this.templatePath('favicon.ico'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.asset.mediaDir]) + '/favicon.ico')
      );

      this.mkdir(helper.joinPath([pathConfig.srcDir, pathConfig.asset.cssDir]));

      this.fs.copy(
        this.templatePath('_en.json'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.asset.i18nDir]) + '/en.json')
      );

      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.asset.fontDir]) + '/.gitkeep')
      );

      /**
       * LESS
       */
      this.directory(
        this.templatePath('less'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.asset.lessDir]))
      );

      /**
       * Karma Tests
       */
      this.directory(
        this.templatePath('test'),
        this.destinationPath('test')
      );
      this.fs.copyTpl(
        this.templatePath('karma-shared.conf.js'),
        this.destinationPath(helper.joinPath([pathConfig.testDir, 'karma-shared.conf.js'])), context
      );

      /**
       * AppJs and IndexHtml
       */
      this.fs.copyTpl(
        this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.main])),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.main])), context
      );

      this.fs.copyTpl(
        this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.app.main])),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.main])), context
      );

      /**
       * Common App Filestructure
       */
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.common.serviceDir]) + '/.gitkeep')
      );

      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.common.directiveDir]) + '/.gitkeep')
      );

      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.common.filterDir]) + '/.gitkeep')
      );

      /**
       * App Core
       */
      this.fs.copyTpl(
        this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.app.coreDir]) + '/appUtil.js'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.coreDir]) + '/appUtil.js'), context
      );
      this.fs.copyTpl(
        this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.app.coreDir]) + '/appConfig.js'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.coreDir]) + '/appConfig.js'), context
      );
      this.fs.copyTpl(
        this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.app.coreDir]) + '/appCore.js'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.coreDir]) + '/appCore.js'), context
      );

      /**
       * Layout Header Direktive
       */
      this.fs.copy(
        this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.app.layoutDir]) + '/header.module.js'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.layoutDir]) + '/header.module.js')
      );

      this.fs.copy(
        this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.app.layoutDir]) + '/common/directives/header.directive.html'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.layoutDir]) + '/common/directives/header.directive.html')
      );

      this.fs.copyTpl(
        this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.app.layoutDir + '/common/directives/header.directive.js'])),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.layoutDir + '/common/directives/header.directive.js'])), context
      );

      /**
       * Sample view data and service
       */
      this.fs.copy(
        this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.app.common.serviceDir]) + '/member.service.js'),
        this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.common.serviceDir]) + '/member.service.js')
      );

      if (this.appStructure === 'Route-Based') {
        /**
         * Route Based
         */
        this.fs.copyTpl(
          this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.app.viewDir]) + '/home/home.js'),
          this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.viewDir]) + '/home/home.js'), context
        );
        this.fs.copy(
          this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.app.viewDir]) + '/home/home.html'),
          this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.app.viewDir]) + '/home/home.html')
        );


      } else {
        /**
         * Module Based
         */
        this.mkdir(helper.joinPath([pathConfig.srcDir, pathConfig.appDir, 'home']));
        this.mkdir(helper.joinPath([pathConfig.srcDir, pathConfig.appDir, 'home/common']));
        this.mkdir(helper.joinPath([pathConfig.srcDir, pathConfig.appDir, 'home/views']));

        this.fs.copy(
          this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.appDir]) + '/home/home.module.js'),
          this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.appDir]) + '/home/home.module.js')
        );

        this.fs.copyTpl(
          this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.appDir]) + '/home/views/home.js'),
          this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.appDir]) + '/home/views/home.js'), context
        );
        this.fs.copy(
          this.templatePath(helper.joinPath([pathConfig.srcDir, pathConfig.appDir]) + '/home/views/home.html'),
          this.destinationPath(helper.joinPath([pathConfig.srcDir, pathConfig.appDir]) + '/home/views/home.html')
        );

      }


    }
  },
  install:      function () {
    this.installDependencies();
    //{
    //  skipInstall: '', //this.options['skip-install'],
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
